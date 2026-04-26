import { TagPill } from "./TagPill";

interface SwapOptionChipProps {
  emoji: string;
  name: string;
  tag: "cost-zero" | "vegano" | "popular" | "proteico";
}

export function SwapOptionChip({ emoji, name, tag }: SwapOptionChipProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        height: "48px",
        padding: "0 12px",
        cursor: "pointer",
        borderRadius: "8px",
        transition: "background 0.15s",
      }}
      className="hover:bg-gray-50"
    >
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          backgroundColor: "#F3F4F6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          flexShrink: 0,
        }}
      >
        {emoji}
      </div>
      <span
        style={{
          fontSize: "13px",
          fontWeight: 500,
          color: "#111827",
          flex: 1,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {name}
      </span>
      <TagPill variant={tag} />
    </div>
  );
}
