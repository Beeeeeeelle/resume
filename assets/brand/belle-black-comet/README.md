# Belle Black Comet Brand Kit

This folder is the public, portable source of truth for generating Belle consistently across image tools, computers, and conversations.

## Start Here

For every new image:

1. Upload `references/belle-reference-board.png`.
2. Upload `references/belle-canonical-current.jpg` as the primary identity reference.
3. Use `GENERATION_PROMPT.md` as the prompt foundation.
4. Generate by editing or extending the canonical reference whenever possible. Do not start from text alone.

The other reference images are pose and silhouette examples. They must not override the primary canonical identity.

## Reference Priority

| Priority | File | Purpose |
| --- | --- | --- |
| 1 | `belle-canonical-current.jpg` | Immutable face, hair mass, proportions, expression, outfit, and hair clip. |
| 2 | `belle-reference-board.png` | Portable one-file overview for tools that accept only one reference image. |
| 3 | `belle-canonical-swept-hair.jpg` | Hair direction and continuous black-comet silhouette. |
| 4 | `belle-research-pose.png` | Research and notebook pose example only. |
| 5 | `belle-flying-pose.jpg` | Flying composition example only. |

## Raw GitHub URLs

After this kit is pushed, other tools can download the files directly:

- Primary canonical: `https://raw.githubusercontent.com/Beeeeeeelle/resume/master/assets/brand/belle-black-comet/references/belle-canonical-current.jpg`
- Reference board: `https://raw.githubusercontent.com/Beeeeeeelle/resume/master/assets/brand/belle-black-comet/references/belle-reference-board.png`
- Prompt: `https://raw.githubusercontent.com/Beeeeeeelle/resume/master/assets/brand/belle-black-comet/GENERATION_PROMPT.md`

Uploading the files to GitHub does not make an image model use them automatically. Attach the primary canonical image in every generation session.

## Contents

- `BELLE_VISUAL_STANDARD.md`: non-negotiable identity and style rules.
- `GENERATION_PROMPT.md`: reusable prompt and negative prompt.
- `reference-manifest.json`: versioned file roles and checksums.
- `build_reference_board.py`: deterministic reference-board builder.
- `references/`: canonical and pose images.
