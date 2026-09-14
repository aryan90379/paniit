import fitz # PyMuPDF
import os

pdf_path = '/Users/apple/.gemini/antigravity/brain/447e76ca-2fa9-40b8-ae37-2d13b30063d5/.user_uploaded/media_1789322492482.pdf'
out_dir = 'public/extracted_images'
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)

# Extract Glimpses (pages 22 and 23, i.e., 23rd and 24th page)
for page_num in [22, 23]:
    page = doc[page_num]
    images = page.get_images()
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        with open(f"{out_dir}/glimpse_p{page_num}_{img_idx}.{image_ext}", "wb") as f:
            f.write(image_bytes)

# Extract Sponsors (pages 19, 20, 21)
for page_num in [19, 20, 21]:
    page = doc[page_num]
    images = page.get_images()
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        with open(f"{out_dir}/sponsor_p{page_num}_{img_idx}.{image_ext}", "wb") as f:
            f.write(image_bytes)

print("Extraction complete.")
