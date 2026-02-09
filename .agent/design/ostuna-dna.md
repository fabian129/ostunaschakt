# Design Concept: Östuna Industrial (Archetype: Construction/Service)

## 1. The Core Aesthetic
**"Precision Heavy Industry."** The site should feel robust, capable, and meticulously organized. It borrows from the visual language of high-end machinery websites (Caterpillar, Volvo CE) mixed with modern architectural portfolios. It is not "dirty" construction; it is "engineered" groundwork.

## 2. Technical DNA (The Rules)

### 1. Palette ("Light Industrial")
- **Primary Background**: `#FFFFFF` (Pure White) - Used for Hero and "Premium" sections.
- **Secondary Background**: `#F4F4F5` (Concrete Grey) - For cards and secondary sections.
- **Foreground**: `#18181B` (Tech Black) - Primary text.
- **Accent**: `#D32F2F` (Safety Red) - Used strictly for Buttons, active states, and key highlights.
- **Muted**: `#71717A` (Steel Grey) - Secondary text and borders.

### Typography
- **Font Family**: `Inter` (Google Font)
- **Weights**:
  - `400`: Body text (High readability)
  - `500`: Navigation, Labels
  - `600`: Subheadings
  - `700`: Headlines (Bold, assertive)
- **Tracking**:
  - Headlines: `-0.02em` (Tight, solid)
  - Overlines: `+0.05em` (Uppercased, widely spaced)

### Shape Language
- **Radius**: `2px` or `4px` (Almost sharp). Avoid fully rounded "friendly" corners. Represents precision.
- **Borders**: `1px solid #333`. Thin, technical lines.
- **Shadows**: Heavy, diffused black shadows for depth (`0 20px 40px -10px rgba(0,0,0,0.5)`).

## 3. Interaction Strategy
- **Scroll Physics**: `Lenis` smooth scroll (Heavy/Damped feel, like moving heavy machinery).
- **Hover Effects**:
  - **Cards**: Slight lift (`y: -5px`), border brightens to `#555` or Accent Red.
  - **Buttons**: Solid Red fill -> Darker Red or White border.
- **Entrance**: Staggered "Slide Up" (`y: 20px -> 0`) with heavy easing (`power3.out`).

## 4. Asset Guidelines
- **Imagery**: High contrast. Desaturated environments with subject matter in full color.
- **Textures**: Subtle noise overlays or concrete/grid patterns to break up solid black.
