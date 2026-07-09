import { ImageResponse } from "next/og";

export const alt = "Rishabh Jain - CS Student, Cyber Security & AI Enthusiast";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#090B12",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "monospace",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle dot background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage: "radial-gradient(#4F7CFF 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            display: "flex",
            width: "100%",
            height: "100%",
          }}
        />

        {/* Aurora glow shadow */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "500px",
            background: "rgba(79, 124, 255, 0.08)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Left Column - branding */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "55%",
            gap: "24px",
          }}
        >
          {/* Status badge indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid rgba(79, 215, 255, 0.3)",
              background: "rgba(79, 215, 255, 0.05)",
              color: "#4FD7FF",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              fontWeight: "bold",
              width: "auto",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#4FD7FF",
              }}
            />
            Open to Opportunities
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ color: "#7B8492", fontSize: "18px", letterSpacing: "2px" }}>
              RISHABH.JAIN
            </span>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "64px",
                fontWeight: "bold",
                lineHeight: "1.1",
              }}
            >
              Rishabh Jain
            </span>
          </div>

          <span
            style={{
              color: "#B8C0CC",
              fontSize: "20px",
              lineHeight: "1.5",
            }}
          >
            Computer Science Student specializing in secure system implementations and intelligent workflows.
          </span>

          <span style={{ color: "#4F7CFF", fontSize: "16px", fontWeight: "bold" }}>
            https://rishabhjain.dev
          </span>
        </div>

        {/* Right Column - mock console code box */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            background: "#0F1722",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "12px",
            padding: "24px",
            gap: "16px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          }}
        >
          {/* Window control circles */}
          <div style={{ display: "flex", gap: "8px" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#FF5D73",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#F5B942",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#2ECC71",
              }}
            />
          </div>

          {/* Console Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            <span style={{ color: "#4FD7FF" }}>rishabh@portfolio:~$ cat dev.json</span>
            <span style={{ color: "#8C7BFF" }}>{"{"}</span>
            <span style={{ color: "#B8C0CC", paddingLeft: "20px" }}>
              &quot;name&quot;: <span style={{ color: "#2ECC71" }}>&quot;Rishabh Jain&quot;</span>,
            </span>
            <span style={{ color: "#B8C0CC", paddingLeft: "20px" }}>
              &quot;focus&quot;: <span style={{ color: "#2ECC71" }}>&quot;CyberSecurity &amp; AI&quot;</span>,
            </span>
            <span style={{ color: "#B8C0CC", paddingLeft: "20px" }}>
              &quot;stack&quot;: <span style={{ color: "#2ECC71" }}>&quot;Next.js / Python / TS&quot;</span>,
            </span>
            <span style={{ color: "#B8C0CC", paddingLeft: "20px" }}>
              &quot;status&quot;: <span style={{ color: "#2ECC71" }}>&quot;building_future&quot;</span>
            </span>
            <span style={{ color: "#8C7BFF" }}>{"}"}</span>
            <div style={{ display: "flex", alignItems: "center", color: "#4FD7FF", marginTop: "12px" }}>
              <span>rishabh@portfolio:~$</span>
              <div style={{ width: "8px", height: "15px", background: "#4FD7FF", marginLeft: "6px" }} />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
