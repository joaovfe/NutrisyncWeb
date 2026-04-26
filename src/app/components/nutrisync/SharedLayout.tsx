import { ImageWithFallback } from "../figma/ImageWithFallback";

const RISOTTO_IMG =
  "https://images.unsplash.com/photo-1662114757324-fb95be6dceaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNocm9vbSUyMHJpc290dG8lMjBkaXNoJTIwcGxhdGVkfGVufDF8fHx8MTc3NzAzNzk0OXww&ixlib=rb-4.1.0&q=80&w=1080";

interface SharedLayoutProps {
  children: React.ReactNode;
  ctaArea?: React.ReactNode;
}

export function MobileFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#F9FAFB",
        borderRadius: "40px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 24px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)",
        position: "relative",
        flexShrink: 0,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          height: "44px",
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: "13px", fontWeight: 600, color: "#111827" }}>9:41</span>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <div style={{ width: "16px", height: "10px", background: "#111827", borderRadius: "2px", opacity: 0.8 }} />
          <div style={{ width: "4px", height: "10px", background: "#111827", borderRadius: "1px", opacity: 0.8 }} />
        </div>
      </div>

      {children}
    </div>
  );
}

export function ScreenHeader() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        borderBottom: "1px solid #E5E7EB",
        flexShrink: 0,
      }}
    >
      <button
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "#F3F4F6",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          color: "#374151",
          flexShrink: 0,
        }}
      >
        ←
      </button>
      <span
        style={{
          flex: 1,
          fontSize: "16px",
          fontWeight: 600,
          color: "#111827",
          textAlign: "center",
        }}
      >
        Risotto de Cogumelos
      </span>
      <button
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "#F3F4F6",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "15px",
          color: "#374151",
          flexShrink: 0,
        }}
      >
        ↑
      </button>
    </div>
  );
}

export function HeroImage() {
  return (
    <div style={{ padding: "16px 20px 0", flexShrink: 0 }}>
      <ImageWithFallback
        src={RISOTTO_IMG}
        alt="Risotto de Cogumelos"
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "12px",
          display: "block",
        }}
      />
    </div>
  );
}

export function SectionHeader({
  label,
  action,
}: {
  label: string;
  action?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 20px 8px",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontSize: "11px",
          fontWeight: 600,
          color: "#6B7280",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </span>
      {action && (
        <span style={{ fontSize: "12px", color: "#4F46E5", fontWeight: 500, cursor: "pointer" }}>
          {action}
        </span>
      )}
    </div>
  );
}

export function CTAButton({ label = "Começar a Cozinhar" }: { label?: string }) {
  return (
    <div
      style={{
        padding: "12px 20px 24px",
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E5E7EB",
        flexShrink: 0,
      }}
    >
      <button
        style={{
          width: "100%",
          height: "52px",
          backgroundColor: "#4F46E5",
          color: "#FFFFFF",
          border: "none",
          borderRadius: "12px",
          fontSize: "15px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {label}
      </button>
    </div>
  );
}
