interface TagPillProps {
  variant: "cost-zero" | "vegano" | "popular" | "proteico";
}

const tagConfig = {
  "cost-zero": {
    label: "Custo Zero",
    bg: "#F0FDF4",
    text: "#15803D",
  },
  vegano: {
    label: "Vegano",
    bg: "#ECFDF5",
    text: "#047857",
  },
  popular: {
    label: "Popular",
    bg: "#F5F3FF",
    text: "#6D28D9",
  },
  proteico: {
    label: "Proteico",
    bg: "#EFF6FF",
    text: "#1D4ED8",
  },
};

export function TagPill({ variant }: TagPillProps) {
  const config = tagConfig[variant];
  return (
    <span
      style={{
        backgroundColor: config.bg,
        color: config.text,
        borderRadius: "24px",
        padding: "2px 8px",
        fontSize: "10px",
        fontWeight: 500,
        lineHeight: "16px",
        whiteSpace: "nowrap",
      }}
    >
      {config.label}
    </span>
  );
}
