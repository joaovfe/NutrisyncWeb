import { Screen1 } from "./components/nutrisync/Screen1";
import { Screen2 } from "./components/nutrisync/Screen2";
import { Screen3 } from "./components/nutrisync/Screen3";

function ScreenLabel({ number, title }: { number: string; title: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "16px" }}>
      <div
        style={{
          display: "inline-block",
          backgroundColor: "#EEF2FF",
          color: "#4338CA",
          fontSize: "11px",
          fontWeight: 600,
          padding: "3px 10px",
          borderRadius: "24px",
          marginBottom: "6px",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        Tela {number}
      </div>
      <div style={{ fontSize: "13px", color: "#374151", fontWeight: 500 }}>{title}</div>
    </div>
  );
}

function Legend() {
  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "12px",
        padding: "14px 28px",
        marginTop: "40px",
        flexShrink: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "3px",
            backgroundColor: "#4F46E5",
          }}
        />
        <span style={{ fontSize: "12px", color: "#374151", fontWeight: 500 }}>
          Indigo = Ação do Usuário
        </span>
      </div>
      <div
        style={{
          width: "1px",
          height: "20px",
          backgroundColor: "#E5E7EB",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "3px",
            backgroundColor: "#7C3AED",
          }}
        />
        <span style={{ fontSize: "12px", color: "#374151", fontWeight: 500 }}>
          Violet = Resposta da IA
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F1F0FB",
        fontFamily: "Inter, sans-serif",
        padding: "40px 24px 60px",
        overflowX: "auto",
      }}
    >
      {/* Frame title */}
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "12px",
            padding: "8px 20px",
            marginBottom: "12px",
          }}
        >
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#4F46E5" }} />
          <span style={{ fontSize: "12px", fontWeight: 600, color: "#6B7280", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Proposta 2
          </span>
          <div style={{ width: "1px", height: "14px", backgroundColor: "#E5E7EB" }} />
          <span style={{ fontSize: "12px", fontWeight: 500, color: "#9CA3AF" }}>Abordagem Exploratória</span>
        </div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#111827",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          NutriSync <span style={{ color: "#4F46E5" }}>AI</span>
        </h1>
        <p style={{ fontSize: "14px", color: "#6B7280", marginTop: "6px" }}>
          Ingredientes exploráveis · Troca em tempo real · IA adaptativa
        </p>
      </div>

      {/* Screen set */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
          justifyContent: "center",
          minWidth: "max-content",
          margin: "0 auto",
        }}
      >
        {/* Screen 1 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <ScreenLabel number="01" title="Visualização da Receita" />
          <Screen1 />
        </div>

        {/* Connector */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "80px",
            gap: "8px",
            color: "#9CA3AF",
            flexShrink: 0,
          }}
        >
          <div style={{ width: "32px", height: "1px", backgroundColor: "#D1D5DB" }} />
          <div style={{ fontSize: "18px" }}>→</div>
          <div style={{ width: "32px", height: "1px", backgroundColor: "#D1D5DB" }} />
        </div>

        {/* Screen 2 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <ScreenLabel number="02" title="Expansão & Seleção de Troca" />
          <Screen2 />
        </div>

        {/* Connector */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "80px",
            gap: "8px",
            color: "#9CA3AF",
            flexShrink: 0,
          }}
        >
          <div style={{ width: "32px", height: "1px", backgroundColor: "#D1D5DB" }} />
          <div style={{ fontSize: "18px" }}>→</div>
          <div style={{ width: "32px", height: "1px", backgroundColor: "#D1D5DB" }} />
        </div>

        {/* Screen 3 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <ScreenLabel number="03" title="Reescrita em Tempo Real pela IA" />
          <Screen3 />
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Legend />
      </div>
    </div>
  );
}
