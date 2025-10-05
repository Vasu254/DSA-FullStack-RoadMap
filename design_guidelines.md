# B.Tech Learning Roadmap Dashboard - Design Guidelines

## Design Approach

**Framework**: Material Design principles adapted for educational technology, drawing inspiration from Coursera's learning path clarity and GitHub's project roadmap visualization. Focus on information hierarchy, progress visualization, and student-friendly navigation.

**Core Philosophy**: Create an empowering, achievement-oriented interface where students can clearly track their journey from first semester to placement success. Every element should communicate progress, possibility, and accomplishment.

---

## Color System

### Primary Palette
- **Primary Indigo**: 251 91% 67% - Main actions, headers, active states
- **Success Green**: 158 64% 52% - Completed items, achievements, positive feedback
- **Achievement Gold**: 38 92% 50% - Milestones, special accomplishments, highlights
- **Progress Blue**: 217 91% 60% - Progress bars, loading states, links

### Neutrals & Backgrounds
- **Background**: 210 40% 98% - Main app background
- **Card Background**: 0 0% 100% - White cards with subtle shadows
- **Text Primary**: 215 25% 27% - Headings and primary text
- **Text Secondary**: 215 16% 47% - Descriptions and metadata
- **Border**: 214 32% 91% - Dividers and card borders

### Semantic Colors
- **Warning**: 38 92% 50% - Pending tasks, reminders
- **Info**: 199 89% 48% - Tips, informational callouts
- **Surface**: 210 20% 98% - Elevated surfaces with glassmorphism

---

## Typography

### Font Families
- **Headings**: Poppins (600, 700 weights) - Bold, friendly, modern
- **Body & UI**: Inter (400, 500, 600 weights) - Clean, readable, professional

### Type Scale
- **Hero Title**: 2.5rem (40px) / 700 weight - Year selection headers
- **Section Heading**: 1.875rem (30px) / 600 weight - Semester titles
- **Card Title**: 1.25rem (20px) / 600 weight - Roadmap section headers
- **Body Large**: 1.125rem (18px) / 500 weight - Feature descriptions
- **Body**: 1rem (16px) / 400 weight - Standard content
- **Caption**: 0.875rem (14px) / 500 weight - Metadata, tags, progress labels

---

## Layout System

### Spacing Primitives
Use Tailwind units: **2, 3, 4, 6, 8, 12, 16** for consistent rhythm
- Component padding: p-6 or p-8
- Section gaps: gap-6 or gap-8
- Card margins: mb-8 or mb-12
- Container padding: px-4 md:px-8

### Grid Structure
- **Container**: max-w-7xl mx-auto
- **Semester Cards**: grid grid-cols-1 md:grid-cols-2 gap-6
- **Year Selection**: grid grid-cols-2 md:grid-cols-4 gap-4
- **Progress Items**: Single column with generous spacing

---

## Component Library

### Navigation
**Top Navigation Bar**
- Fixed header with blur backdrop (backdrop-blur-lg bg-white/80)
- Logo left, year selector center, profile/settings right
- Border bottom with subtle shadow
- Height: h-16

### Year Selection Cards
**Interactive Year Selector** (4 cards)
- Gradient border on hover (from indigo to blue)
- Large year number (text-6xl) with semester count
- Icon indicating locked/unlocked status
- Shadow elevation on hover (shadow-lg → shadow-2xl)
- Active state: border-2 border-indigo-600 with checkmark

### Semester Roadmap Cards
**Main Content Cards**
- White background with rounded-2xl corners
- Soft shadow (shadow-md)
- Glassmorphism overlay for locked semesters (bg-white/60 backdrop-blur-sm)
- Header section with semester number, timeline, and status badge
- Collapsible sections for: Learning Focus, DSA Topics, Projects, Expected Output
- Progress bar at bottom (0-100% completion)

### Progress Components
**Checklist Items**
- Custom checkbox with indigo accent on checked state
- Strikethrough text for completed items
- Green checkmark icon for completed
- Hover state: subtle background highlight

**Progress Bars**
- Height: h-3, rounded-full
- Background: gray-200
- Fill gradient: from-blue-500 to-indigo-600
- Percentage label positioned top-right
- Smooth transition animation (transition-all duration-500)

### Milestone Timeline
**Vertical Timeline Visualization**
- Left-aligned connector line (border-l-2 border-indigo-200)
- Circular node indicators (w-4 h-4) - filled for completed, outline for pending
- Gold stars for major milestones (placements, internships)
- Card attached to each node with milestone details

### Learning Path Badges
**Dual Track Indicators**
- DSA Path: Blue gradient badge with code icon
- Full-Stack Path: Green gradient badge with layers icon
- Rounded-full pills with subtle shadow
- Display current focus area per semester

### Achievement System
**Unlock Indicators**
- Lock icon (gray-400) for unavailable semesters
- Unlock animation with gold glow for newly accessible content
- Achievement medals for completed semesters (bronze/silver/gold tiers)
- Confetti animation on semester completion

---

## Interaction Patterns

### Hover States
- Cards: Lift 4px with increased shadow (transform translateY(-4px))
- Buttons: Scale 102% with deeper color
- Checkboxes: Indigo ring with scale animation
- Timeline nodes: Pulse animation with glow

### Transitions
- All interactions: transition-all duration-300 ease-in-out
- Progress bars: duration-500 for smoothness
- Card reveals: Stagger animation (delay-75, delay-150, delay-300)

### Glassmorphism Effects
- Locked semester overlays: bg-white/70 backdrop-blur-md
- Floating action buttons: bg-indigo-500/90 backdrop-blur-sm
- Modal backgrounds: bg-black/30 backdrop-blur-sm

---

## Images

### Hero Section
**Large Hero Banner** (full-width, h-96)
- Inspiring image of students studying/coding with laptop
- Gradient overlay (from-indigo-900/80 to-transparent)
- Centered text: "Your Journey to Placement Success Starts Here"
- CTA buttons with blurred backgrounds (backdrop-blur-md bg-white/20)

### Section Illustrations
- **DSA Path**: Abstract illustration of data structures (trees, graphs) in indigo tones
- **Full-Stack Path**: Layered tech stack visualization in green tones
- **Placement Success**: Celebration/success imagery with gold accents
- All images: rounded-xl with subtle shadow

**Placement**: Hero at top, section illustrations between major roadmap phases (after sem 2, 4, 6)

---

## Responsive Behavior

- **Mobile** (< 768px): Single column, collapsible navigation, vertical timeline
- **Tablet** (768-1024px): 2-column semester cards, compact timeline
- **Desktop** (> 1024px): Full grid, expanded timeline, side-by-side paths

---

## Accessibility
- WCAG AA contrast ratios minimum
- Keyboard navigation for all interactive elements
- ARIA labels for progress indicators and status badges
- Focus rings with indigo-500 color (ring-2 ring-indigo-500)