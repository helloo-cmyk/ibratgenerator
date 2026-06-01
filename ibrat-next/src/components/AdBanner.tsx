export default function AdBanner({
  adKey,
  format,
  height,
  width,
  className = "",
}: {
  adKey: string;
  format: string;
  height: number;
  width: number;
  className?: string;
}) {
  return (
    <div className={`w-full flex justify-center overflow-hidden ${className}`}>
      <iframe
        srcDoc={`
          <!DOCTYPE html>
          <html>
            <head>
              <style>body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; overflow: hidden; background: transparent; }</style>
            </head>
            <body>
              <script type="text/javascript">
                atOptions = {
                  'key' : '${adKey}',
                  'format' : '${format}',
                  'height' : ${height},
                  'width' : ${width},
                  'params' : {}
                };
              </script>
              <script type="text/javascript" src="https://www.highperformanceformat.com/${adKey}/invoke.js"></script>
            </body>
          </html>
        `}
        width={width}
        height={height}
        style={{ border: "none", overflow: "hidden", display: "block", background: "transparent" }}
        scrolling="no"
        title="Ad"
      />
    </div>
  );
}
