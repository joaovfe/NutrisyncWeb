import { MobileFrame, ScreenHeader, HeroImage, SectionHeader, CTAButton } from "./SharedLayout";
import { IngredientCard } from "./IngredientCard";
import { PrepStepRow } from "./PrepStepRow";

const ingredients = [
  { id: 1, name: "Cogumelos", quantity: "200g", isSwappable: true },
  { id: 2, name: "Arroz Arbóreo", quantity: "300g" },
  { id: 3, name: "Caldo Vegetal", quantity: "1L" },
  { id: 4, name: "Queijo Parmesão", quantity: "80g" },
  { id: 5, name: "Vinho Branco", quantity: "100ml" },
];

export function Screen1() {
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
                state="default"
              />
            ))}
          </div>
        </div>

        {/* Prep section */}
        <SectionHeader label="Modo de Preparo" />
        <div style={{ padding: "4px 20px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <PrepStepRow
            number={1}
            text="Aqueça o caldo vegetal em uma panela separada e mantenha em fogo baixo, bem quente."
          />
          <PrepStepRow
            number={2}
            text="Em uma frigideira, refogue os cogumelos com azeite por 5 minutos até dourar levemente."
          />
          <PrepStepRow
            number={3}
            text="Acrescente o arroz e torre levemente por 2 minutos, depois adicione o vinho branco e mexa até evaporar."
          />
        </div>
      </div>

      <CTAButton />
    </MobileFrame>
  );
}
