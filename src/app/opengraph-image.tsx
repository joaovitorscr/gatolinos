import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/seo";

export const alt = `${siteConfig.name} - adoção e apadrinhamento de gatos em Londrina`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#fffaf1",
        color: "#251202",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "76px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          border: "2px solid rgba(61, 38, 17, 0.14)",
          borderRadius: "44px",
          display: "flex",
          gap: "54px",
          height: "100%",
          justifyContent: "space-between",
          padding: "56px 64px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "28px", width: "670px" }}>
          <div
            style={{
              color: "#875400",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Londrina, PR
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ fontSize: 76, fontWeight: 900, lineHeight: 0.96 }}>Projeto Gatolinos</div>
            <div style={{ color: "#5f4b3d", fontSize: 34, fontWeight: 600, lineHeight: 1.25 }}>
              Adoção responsável, apadrinhamento e cuidado felino sustentado por doações.
            </div>
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            background: "#ffdcc1",
            borderRadius: "999px",
            color: "#875400",
            display: "flex",
            fontSize: 148,
            fontWeight: 900,
            height: "280px",
            justifyContent: "center",
            width: "280px",
          }}
        >
          G
        </div>
      </div>
    </div>,
    size,
  );
}
