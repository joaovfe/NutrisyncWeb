Create a mobile app screen set for "NutriSync AI" — a second design 
proposal focused on speed, exploration, and real-time AI feedback. 
Use the same design tokens as Proposal 1 but with a distinct visual 
language: more spacious cards, horizontal carousels, and animated 
state indicators.

DESIGN TOKENS (same base, extended):
- Primary color: #4F46E5 (Indigo 600)
- AI Highlight: #7C3AED (Violet 600) — used exclusively for AI-
  generated content
- Success: #16A34A
- Neutral BG: #F9FAFB
- Card surface: #FFFFFF
- Carousel track BG: #F3F4F6 (Gray 100)
- Text primary: #111827
- Text secondary: #6B7280
- Border: #E5E7EB
- Border-radius: 12px (cards), 16px (ingredient carousel cards), 
  24px (pills)
- Font: Inter — 400, 500, 600
- Spacing: 4 / 8 / 12 / 16 / 24 / 32px

COMPONENT LIBRARY (reusable Auto Layout components):
- Ingredient Card (Carousel): width 140px, height 80px, vertical 
  layout — ingredient name (500, 14px), quantity (Gray 500, 12px), 
  background white, border default. Tap state: border Indigo 600, 
  shadow subtle. "Add" icon (+) bottom right corner Gray 400.
- Swap Option Chip: horizontal, icon area (24×24px circle with 
  emoji/icon) + name + optional tag pill. Compact: height 48px, 
  full width of expanded card.
- Expanded Ingredient Card: same width as Carousel Card but height 
  auto, showing 3 Swap Option Chips stacked inside with a divider. 
  Header still shows original ingredient name with ✕ close icon.
- Tag Pill: variants [cost-zero, vegano, popular, proteico] — 
  each with distinct fill: cost-zero = Green 50/700, vegano = 
  Emerald 50/700, popular = Violet 50/700, proteico = Blue 50/700
- Prep Step Row: numbered circle (Indigo 600 bg, white number) + 
  text block. "AI updated" variant: text block has a Violet 50 
  background with Violet 700 text, left border accent 3px Violet 600, 
  small label "✦ Atualizado pela IA" in 11px Violet 500 above the step.
- AI Rewrite Indicator: a thin strip spanning full content width, 
  Violet 50 background, centered label "✦ IA reescrevendo modo de 
  preparo..." — used as a transition state before the updated steps 
  appear.
- Section Header: label left (Gray 500, 12px uppercase) + optional 
  action link right (Indigo 600, 12px "Ver todos")

SCREENS TO DESIGN (3 screens, mobile 390×844px):

SCREEN 1 — Recipe View with Ingredient Carousel
- Header: back arrow + "Risotto de Cogumelos" + share icon
- Hero image placeholder: full width, 200px, radius 12px
- Section Header: "Ingredientes" + "Ver lista completa"
- Horizontal scrollable carousel of 5 Ingredient Cards. Show 3.5 
  cards visible (last one partially cut off to signal scrollability). 
  First card has a light Indigo 600 dot indicator at top right 
  corner to show "swappable". Track background Gray 100, padding 
  16px horizontal.
- Section Header: "Modo de Preparo"
- 3 Prep Step Rows using the component. All in default state. 
  Step text is realistic for a risotto recipe.
- Bottom sticky: "Começar a Cozinhar" CTA, full width, Indigo 600

SCREEN 2 — Expanded Card with Swap Options
- Same Screen 1 layout
- One Ingredient Card is in "expanded" state (use Expanded 
  Ingredient Card component): the card expands vertically in-place 
  within the carousel, showing the 3 Swap Option Chips below the 
  original ingredient name:
  1. 🌾 "Amido de Milho" — Tag Pill: [Custo Zero]
  2. 🥛 "Leite de Aveia" — Tag Pill: [Vegano]
  3. 💧 "Água com manteiga" — Tag Pill: [Popular]
- The two adjacent cards are partially visible on each side (or 
  slightly dimmed) to keep spatial context
- A subtle tap gesture hint: a small hand icon or "toque para trocar" 
  label in 11px Gray 400 at the bottom of the expanded card

SCREEN 3 — Real-time AI Rewrite (Post-Swap)
- Ingredient Card for the swapped ingredient now shows new name 
  in Indigo 700 with a small "✓" icon — card border Indigo 600
- AI Rewrite Indicator strip visible between the carousel and 
  the Modo de Preparo section
- Prep Step Rows below:
  - Step 1: default state
  - Step 2: "AI updated" variant — shows "Atualizado pela IA" label, 
    Violet 50 background on text block. The changed word within 
    the step text should be in a Violet 100 inline highlight 
    (background Violet 100, text Violet 800, radius 4px) — show it 
    inline within the sentence.
  - Step 3: default state
- Add a floating action chip at the bottom of the screen (above 
  the CTA), floating pill: "↩ Desfazer" in Gray 900 background, 
  white text, shadow none, radius 24px, width auto (fit content)
- CTA: "Começar a Cozinhar"

ADDITIONAL REQUIREMENTS:
- All components must be Figma components with named variants and 
  properties
- Use Auto Layout for every component and screen section
- The carousel must be set up as a horizontal frame with 
  overflow = scroll (horizontal), items in a row with gap 12px
- Annotate variants clearly: state=default/expanded/selected/
  ai-updated
- Color-code the two types of interaction: Indigo = user action, 
  Violet = AI response — maintain this distinction consistently
- Group screens in a single frame row labeled 
  "Proposta 2 — Abordagem Exploratória"
- Add a small legend frame below: 
  [■ Indigo = Ação do Usuário] [■ Violet = Resposta da IA]