import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          color: "#e8f0ff",
          background:
            "radial-gradient(circle at 12% 12%, #1d4ed899 0, transparent 36%), radial-gradient(circle at 88% 86%, #0891b299 0, transparent 30%), linear-gradient(140deg, #05080e 0%, #0a1321 52%, #0b1a2a 100%)",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: "0.3em",
            color: "#67e8f9",
            fontWeight: 700,
          }}
        >
          STREAMSIGHT
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 0.92,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Coming Soon
          </div>
          <div
            style={{
              fontSize: 34,
              maxWidth: "86%",
              color: "#c6dbf5",
              lineHeight: 1.35,
            }}
          >
            Interactive flow visualization software for faster operational
            decisions.
          </div>
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#8dd3e4",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Streamsight.co
        </div>
      </div>
    ),
    size,
  );
}
