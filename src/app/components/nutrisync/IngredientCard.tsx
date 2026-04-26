import { SwapOptionChip } from "./SwapOptionChip";

type CardState = "default" | "expanded" | "swapped" | "dimmed";

interface IngredientCardProps {
  name: string;
  quantity: string;
  isSwappable?: boolean;
  state?: CardState;
  swappedName?: string;
  onClose?: () => void;
}

export function IngredientCard({
  name,
  quantity,
  isSwappable = false,
  state = "default",
  swappedName,
  onClose,
}: IngredientCardProps) {
  const isExpanded = state === "expanded";
  const isSwapped = state === "swapped";
  const isDimmed = state === "dimmed";

  const borderColor = isExpanded || isSwapped ? "#4F46E5" : "#E5E7EB";
  const opacity = isDimmed ? 0.5 : 1;

  if (isExpanded) {
    return (
      <div
        style={{
          width: "160px",
          flexShrink: 0,
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          border: `1.5px solid #4F46E5`,
          boxShadow: "0 4px 12px rgba(79,70,229,0.12)",
          overflow: "hidden",
          opacity,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 12px 8px",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <div>
            <div style={{ fontSize: "13px", fontWeight: 500, color: "#111827" }}>{name}</div>
            <div style={{ fontSize: "11px", color: "#6B7280", marginTop: "1px" }}>{quantity}</div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: "#F3F4F6",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              color: "#6B7280",
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {/* Swap options */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SwapOptionChip emoji="🌾" name="Amido de Milho" tag="cost-zero" />
          <div style={{ height: "1px", backgroundColor: "#F3F4F6", margin: "0 12px" }} />
          <SwapOptionChip emoji="🥛" name="Leite de Aveia" tag="vegano" />
          <div style={{ height: "1px", backgroundColor: "#F3F4F6", margin: "0 12px" }} />
          <SwapOptionChip emoji="💧" name="Água com manteiga" tag="popular" />
        </div>

        {/* Tap hint */}
        <div
          style={{
            textAlign: "center",
            padding: "6px 12px 8px",
            fontSize: "10px",
            color: "#9CA3AF",
          }}
        >
          toque para trocar
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "140px",
        height: "80px",
        flexShrink: 0,
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        border: `1.5px solid ${borderColor}`,
        boxShadow: isSwapped ? "0 2px 8px rgba(79,70,229,0.10)" : "none",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        opacity,
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      {/* Swappable indicator dot */}
      {isSwappable && !isSwapped && (
        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            backgroundColor: "#4F46E5",
          }}
        />
      )}

      <div>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: isSwapped ? "#3730A3" : "#111827",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {isSwapped && swappedName ? swappedName : name}
          {isSwapped && (
            <span style={{ fontSize: "11px", color: "#16A34A", fontWeight: 600 }}>✓</span>
          )}
        </div>
        <div style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "2px" }}>{quantity}</div>
      </div>

      {/* Add icon */}
      {!isSwapped && (
        <div
          style={{
            position: "absolute",
            bottom: "8px",
            right: "8px",
            fontSize: "16px",
            color: "#D1D5DB",
            lineHeight: 1,
          }}
        >
          +
        </div>
      )}
    </div>
  );
}
