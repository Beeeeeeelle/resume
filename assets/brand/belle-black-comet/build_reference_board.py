from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parent
REFERENCES = ROOT / "references"
OUTPUT = REFERENCES / "belle-reference-board.png"

WIDTH = 1800
HEIGHT = 1200
MARGIN = 54
GAP = 28
PANEL_WIDTH = (WIDTH - MARGIN * 2 - GAP) // 2
PANEL_HEIGHT = 475

FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_REGULAR = "/System/Library/Fonts/Supplemental/Arial.ttf"

PANELS = [
    ("PRIMARY CANONICAL", "Identity, face, proportions, clip", "belle-canonical-current.jpg"),
    ("SWEPT-HAIR SILHOUETTE", "Continuous black-comet hair direction", "belle-canonical-swept-hair.jpg"),
    ("RESEARCH POSE", "Pose guidance only", "belle-research-pose.png"),
    ("FLYING POSE", "Pose guidance only", "belle-flying-pose.jpg"),
]


def load_font(size, bold=False):
    return ImageFont.truetype(FONT_BOLD if bold else FONT_REGULAR, size)


def draw_panel(canvas, index, title, subtitle, filename):
    column = index % 2
    row = index // 2
    x = MARGIN + column * (PANEL_WIDTH + GAP)
    y = 118 + row * (PANEL_HEIGHT + GAP)

    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle(
        (x, y, x + PANEL_WIDTH, y + PANEL_HEIGHT),
        radius=12,
        fill="#FFFFFF",
        outline="#D8DEE8",
        width=2,
    )
    draw.text((x + 24, y + 20), title, font=load_font(24, bold=True), fill="#172033")
    draw.text((x + 24, y + 53), subtitle, font=load_font(17), fill="#687484")

    image = Image.open(REFERENCES / filename).convert("RGB")
    frame = (PANEL_WIDTH - 48, PANEL_HEIGHT - 112)
    contained = ImageOps.contain(image, frame, Image.LANCZOS)
    image_x = x + (PANEL_WIDTH - contained.width) // 2
    image_y = y + 92 + (frame[1] - contained.height) // 2
    canvas.paste(contained, (image_x, image_y))

    if index == 0:
        draw.rounded_rectangle(
            (x + PANEL_WIDTH - 208, y + 18, x + PANEL_WIDTH - 20, y + 52),
            radius=16,
            fill="#FFF5EF",
            outline="#E05A2B",
            width=2,
        )
        draw.text(
            (x + PANEL_WIDTH - 186, y + 24),
            "IDENTITY SOURCE",
            font=load_font(15, bold=True),
            fill="#B7441C",
        )


def main():
    canvas = Image.new("RGB", (WIDTH, HEIGHT), "white")
    draw = ImageDraw.Draw(canvas)

    draw.text((MARGIN, 36), "BELLE BLACK COMET", font=load_font(38, bold=True), fill="#172033")
    draw.text(
        (MARGIN, 79),
        "Portable character reference · v1.0 · primary canonical always wins",
        font=load_font(20),
        fill="#687484",
    )

    for index, panel in enumerate(PANELS):
        draw_panel(canvas, index, *panel)

    footer_y = 1090
    draw.line((MARGIN, footer_y, WIDTH - MARGIN, footer_y), fill="#E05A2B", width=3)
    draw.text(
        (MARGIN, footer_y + 22),
        "LOCK: continuous swept black hair · tiny dot eyes · small black body · one four-wing 2×2 butterfly clip",
        font=load_font(20, bold=True),
        fill="#172033",
    )

    colors = ["#7B9CC8", "#C8868E", "#82B896", "#D1A760"]
    swatch_x = WIDTH - MARGIN - 188
    for index, color in enumerate(colors):
        x = swatch_x + (index % 2) * 48
        y = footer_y + 19 + (index // 2) * 34
        draw.ellipse((x, y, x + 24, y + 24), fill=color, outline="#172033", width=1)

    canvas.save(OUTPUT, optimize=True)


if __name__ == "__main__":
    main()
