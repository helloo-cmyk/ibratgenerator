import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const rateLimit = new Map<string, number[]>()

const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 3 // max 3 requests per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimit.get(ip) || []
  const recent = timestamps.filter(
    t => now - t < RATE_LIMIT_WINDOW
  )
  if (recent.length >= RATE_LIMIT_MAX) return true
  recent.push(now)
  rateLimit.set(ip, recent)
  return false
}

function sanitizeInput(str: string): string {
  if (!str) return 'Not provided';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\n/g, '<br/>')
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error("Feedback API Error: RESEND_API_KEY is not defined.");
      return NextResponse.json(
        { success: false, error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, message } = body;

    // Validate that message is present and not empty
    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Using resend onboarding email
      to: 'ibratgenerator@gmail.com',
      subject: 'New Feedback Submission',
      html: `
        <h3>New Feedback Received</h3>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong><br/>${sanitizedMessage}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { success: false, error: error.message || "Failed to send feedback" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Feedback submission catch block:", error);
    return NextResponse.json(
      { success: false, error: "Invalid request or server error" },
      { status: 400 }
    );
  }
}
