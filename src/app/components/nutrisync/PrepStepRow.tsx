type PrepStepState = "default" | "ai-updated";

interface PrepStepRowProps {
  number: number;
  text: string | React.ReactNode;
  state?: PrepStepState;
}

export function PrepStepRow({ number, text, state = "default" }: PrepStepRowProps) {
  const isAiUpdated = state === "ai-updated";

  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
      {/* Number circle */}
      <div
        style={{
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          backgroundColor: "#4F46E5",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "13px",
          fontWeight: 600,
          flexShrink: 0,
          marginTop: isAiUpdated ? "20px" : "0",
        }}
      >
        {number}
      </div>

      {/* Text block */}
      <div style={{ flex: 1 }}>
        {isAiUpdated && (
          <div
            style={{
              fontSize: "10px",
              color: "#7C3AED",
              fontWeight: 500,
              marginBottom: "4px",
              letterSpacing: "0.01em",
            }}
          >
            ✦ Atualizado pela IA
          </div>
        )}
        <div
          style={{
            backgroundColor: isAiUpdated ? "#F5F3FF" : "transparent",
            borderLeft: isAiUpdated ? "3px solid #7C3AED" : "none",
            paddingLeft: isAiUpdated ? "10px" : "0",
            paddingTop: isAiUpdated ? "8px" : "0",
            paddingBottom: isAiUpdated ? "8px" : "0",
            paddingRight: isAiUpdated ? "10px" : "0",
            borderRadius: isAiUpdated ? "0 8px 8px 0" : "0",
            fontSize: "13px",
            color: isAiUpdated ? "#5B21B6" : "#374151",
            lineHeight: "1.5",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
