import os
from PIL import Image

src_path = r"C:\Users\Karunendu\.gemini\antigravity\brain\6d7fbb75-4fd9-440d-abcc-9c09b9b949d7\.user_uploaded\media_1788782119372.png"
dest_dir = r"C:\Users\Karunendu\.gemini\antigravity\scratch\auto-uranium-website\public\images"

os.makedirs(dest_dir, exist_ok=True)

img = Image.open(src_path)
width, height = img.size
print(f"Loaded image: {width}x{height}")

# Define crops: (left, upper, right, lower)
crops = {
    "hero_car.png": (180, 40, 490, 235),
    "service_ppf.png": (15, 355, 90, 445),
    "service_detailing.png": (94, 355, 170, 445),
    "service_painting.png": (174, 355, 248, 445),
    "service_glass_film.png": (252, 355, 327, 445),
    "service_washing.png": (332, 355, 407, 445),
    "service_ceramic_coating.png": (412, 355, 487, 445),
    "value_car_taillight.png": (15, 565, 360, 695),
    "avatar_rahul.png": (130, 740, 155, 768),
    "avatar_priya.png": (252, 740, 277, 768),
    "avatar_aman.png": (377, 740, 402, 768),
    "prefooter_bg.png": (15, 805, 485, 875),
}

for filename, box in crops.items():
    cropped = img.crop(box)
    out_path = os.path.join(dest_dir, filename)
    cropped.save(out_path)
    print(f"Saved: {filename} ({cropped.size[0]}x{cropped.size[1]})")

print("All image resources extracted successfully!")
