$svgContent = @"
<?xml version="1.0" encoding="UTF-8"?>
<svg width="1280" height="720" viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="15" dy="25" stdDeviation="10" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
    <filter id="glow" x="-20%" y="-20%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="20" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <!-- Background pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222" stroke-width="1.5"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1280" height="720" fill="#111111"/>
  <rect width="1280" height="720" fill="url(#grid)"/>

  <!-- Left Floating Pill -->
  <g transform="translate(180, 220) rotate(-8)" filter="url(#shadow)">
    <rect x="0" y="0" width="300" height="90" rx="45" fill="#ffffff"/>
    <text x="150" y="49" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="bold" fill="#000000" text-anchor="middle" dominant-baseline="middle" letter-spacing="-0.03em">tiktok guide</text>
  </g>

  <!-- Right Floating Pill -->
  <g transform="translate(850, 480) rotate(6)" filter="url(#shadow)">
    <rect x="0" y="0" width="220" height="90" rx="45" fill="#89CC04"/>
    <text x="110" y="49" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="bold" fill="#000000" text-anchor="middle" dominant-baseline="middle" letter-spacing="-0.03em">viral</text>
  </g>

  <!-- Phone Mockup Center -->
  <g transform="translate(640, 360) rotate(4)">
    <!-- Phone Body -->
    <rect x="-190" y="-340" width="380" height="680" rx="45" fill="#000000" stroke="#333333" stroke-width="6" filter="url(#shadow)"/>
    
    <!-- Phone Screen -->
    <rect x="-175" y="-325" width="350" height="650" rx="35" fill="#89CC04"/>
    
    <!-- Dynamic Island / Notch -->
    <rect x="-60" y="-315" width="120" height="35" rx="17.5" fill="#000000"/>

    <!-- Screen Content: Text -->
    <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-size="100" font-weight="normal" fill="#000000" text-anchor="middle" dominant-baseline="middle" letter-spacing="-0.05em">tiktok</text>
    
    <!-- TikTok UI Mockup -->
    <!-- Right side buttons -->
    <circle cx="135" cy="80" r="22" fill="#ffffff" opacity="0.9"/>
    
    <!-- Heart Icon -->
    <g transform="translate(135, 160)">
      <circle cx="0" cy="0" r="22" fill="#ffffff" opacity="0.25"/>
      <path d="M0,8 L-10,-2 A 6 6 0 0 1 0,-10 A 6 6 0 0 1 10,-2 Z" fill="#ffffff" opacity="0.95"/>
    </g>
    
    <!-- Comment Icon -->
    <g transform="translate(135, 230)">
      <circle cx="0" cy="0" r="22" fill="#ffffff" opacity="0.25"/>
      <path d="M-8,-6 L8,-6 L8,4 L2,4 L-4,10 L-4,4 L-8,4 Z" fill="#ffffff" opacity="0.95"/>
    </g>
    
    <!-- Share/Bookmark Icon -->
    <g transform="translate(135, 300)">
      <circle cx="0" cy="0" r="22" fill="#ffffff" opacity="0.25"/>
      <path d="M-7,-8 L7,-8 L7,8 L0,3 L-7,8 Z" fill="#ffffff" opacity="0.95"/>
    </g>

    <!-- Bottom left info -->
    <rect x="-155" y="195" width="140" height="14" rx="7" fill="#ffffff" opacity="0.95"/>
    <rect x="-155" y="225" width="220" height="10" rx="5" fill="#ffffff" opacity="0.8"/>
    <rect x="-155" y="245" width="180" height="10" rx="5" fill="#ffffff" opacity="0.8"/>
    
    <rect x="-155" y="280" width="160" height="12" rx="6" fill="#ffffff" opacity="0.95"/>
  </g>
</svg>
"@

$outputPath = "d:\ibrat generator\ibrat-next\public\blog-images\tiktok-hero.svg"
[System.IO.File]::WriteAllText($outputPath, $svgContent)
Write-Host "Successfully generated creative SVG at $outputPath"
