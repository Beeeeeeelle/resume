# Belle Generation Prompt

## Required Inputs

Attach these two files before generating:

1. `references/belle-canonical-current.jpg`
2. `references/belle-reference-board.png`

Use image editing, image-to-image, or reference-conditioned generation. Avoid text-only generation.

## Reusable Prompt

```text
Use the attached Belle Black Comet canonical image as the immutable character identity reference. Preserve her exact recognizable design: one continuous swept upward black hair mass with sparse warm-gold stars; one tiny four-wing 2x2 butterfly hair clip with dusty-blue, muted-rose, soft-green, and warm-ochre wings around a black center; a small white face with two tiny black vertical-dot eyes, neutral expression, very light blush; a small black outfit and thin limbs.

Create [DESCRIBE THE SCENE AND BELLE'S CONCEPTUAL ACTION].

Visual language: pure white background, fine slightly irregular black hand-drawn linework, generous white space, restrained academic sketch aesthetic, small orange path accents and only necessary blue annotations. Belle must actively operate, observe, connect, measure, or move through the concept rather than appear as decoration. Preserve the canonical face, hair silhouette, body proportions, outfit, and hair clip exactly. Treat pose references only as pose guidance, never as permission to redesign Belle.
```

## Negative Prompt

```text
Do not redesign the character. No anime, no large or glossy eyes, no eyelashes, no broad smile, no white dress, no colorful outfit, no generic cute mascot, no sticker look, no 3D rendering, no commercial vector illustration. No flower hair clip, no five petals, no extra petals, no second clip, no bow, no floating colored dots. No gray pencil hair, no detached black cloud, no fire or spike hair, no tentacles, no long horizontal hair tail. No beige background, gradient, paper texture, dashboard, slide template, formal flowchart, dense labels, or decorative clutter.
```

## Recommended Settings

- Reference or image strength: medium-high.
- Stylization or creativity: low-medium.
- Variation count: generate 2-4, then reject identity drift before judging composition.
- For revisions, edit the closest successful image rather than starting again from text.
- If a tool accepts only one image, upload `belle-reference-board.png`.

## Audit Before Use

- Hair is one continuous black-comet mass.
- Both tiny dot eyes are visible.
- Hair clip has exactly four correctly colored wings in a 2 x 2 arrangement.
- Outfit is black and body remains small.
- Belle's identity matches the primary canonical reference before scene quality is considered.
