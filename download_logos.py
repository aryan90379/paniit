from bing_image_downloader import downloader
import os
import shutil

# Ensure directory exists and is clean
output_dir = 'public/sponsors'
if os.path.exists(output_dir):
    shutil.rmtree(output_dir)
os.makedirs(output_dir)

sponsors = [
    "IBM logo png transparent",
    "TCS logo png transparent",
    "SAP logo png transparent",
    "Reliance Industries logo png transparent",
    "SBI logo png transparent",
    "HDFC Bank logo png transparent",
    "Kotak Bank logo png transparent",
    "Schneider Electric logo png transparent",
    "Coal India logo png transparent",
    "NMDC logo png transparent"
]

for sponsor in sponsors:
    print(f"Downloading {sponsor}...")
    downloader.download(sponsor, limit=1, output_dir=output_dir, adult_filter_off=True, force_replace=False, timeout=60, verbose=False)

