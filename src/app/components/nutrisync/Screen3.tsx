import { MobileFrame, ScreenHeader, HeroImage, SectionHeader, CTAButton } from "./SharedLayout";
import { IngredientCard } from "./IngredientCard";
import { PrepStepRow } from "./PrepStepRow";

const ingredients = [
  { id: 1, name: "Cogumelos", quantity: "200g", isSwappable: true, state: "swapped" as const, swappedName: "Amido de Milho" },
  { id: 2, name: "Arroz Arbóreo", quantity: "300g", state: "default" as const },
  { id: 3, name: "Caldo Vegetal", quantity: "1L", state: "default" as const },
  { id: 4, name: "Queijo Parmesão", quantity: "80g", state: "default" as const },
  { id: 5, name: "Vinho Branco", quantity: "100ml", state: "default" as const },
];

// Inline highlight for AI-changed word
function InlineHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        backgroundColor: "#EDE9FE",
        color: "#5B21B6",
        borderRadius: "4px",
        padding: "0 4px",
      }}
    >
      {children}
    </span>
  );
}

const step2Text = (
  <>
    Em uma frigideira, refogue o{" "}
    <InlineHighlight>amido de milho</InlineHighlight>
    {" "}com azeite por 3 minutos até incorporar bem à base.
  </>
);

export function Screen3() {
  return (
    <MobileFrame>
      <ScreenHeader />
      <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
        <HeroImage />

        {/* Ingredients section */}
        <SectionHeader label="Ingredientes" action="Ver lista completa" />

        {/* Carousel */}
        <div
          style={{
            backgroundColor: "#F3F4F6",
            padding: "12px 0",
            overflowX: "auto",
            overflowY: "hidden",
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              paddingLeft: "20px",
              paddingRight: "20px",
              width: "max-content",
            }}
          >
            {ingredients.map((ing) => (
              <IngredientCard
                key={ing.id}
                name={ing.name}
                quantity={ing.quantity}
                isSwappable={ing.isSwappable}
                state={ing.state}
                swappedName={ing.swappedName}
              />
            ))}
          </div>
        </div>

        {/* AI Rewrite Indicator */}
        <div
          style={{
            backgroundColor: "#F5F3FF",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: "13px", color: "#7C3AED", fontWeight: 500 }}>
            ✦ IA reescrevendo modo de preparo...
          </span>
        </div>

        {/* Prep section */}
        <SectionHeader label="Modo de Preparo" />
        <div style={{ padding: "4px 20px 16px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <PrepStepRow
            number={1}
            text="Aqueça o caldo vegetal em uma panela separada e mantenha em fogo baixo, bem quente."
          />
          <PrepStepRow
            number={2}
            text={step2Text}
            state="ai-updated"
          />
          <PrepStepRow
            number={3}
            text="Acrescente o arroz e torre levemente por 2 minutos, depois adicione o vinho branco e mexa até evaporar."
          />
        </div>

        {/* Floating undo pill */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "12px",
            paddingTop: "4px",
          }}
        >
          <button
            style={{
              backgroundColor: "#111827",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "24px",
              padding: "10px 20px",
              fontSize: "13px",
              fontWeight: 500,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span>↩</span>
            <span>Desfazer</span>
          </button>
        </div>
      </div>

      <CTAButton />
    </MobileFrame>
  );
}
