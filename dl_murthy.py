from bing_image_downloader import downloader
import os
import shutil

query = 'Infosys Narayana Murthy face portrait'
downloader.download(query, limit=1, output_dir='downloads', adult_filter_off=False, force_replace=False, timeout=10, verbose=False)

downloaded_dir = os.path.join('downloads', query)
files = os.listdir(downloaded_dir)
if files:
    src_file = os.path.join(downloaded_dir, files[0])
    ext = os.path.splitext(src_file)[1]
    dst_file = os.path.join('public', 'past-speakers', 'murthy' + ext)
    shutil.copy(src_file, dst_file)
    print(f"Moved {src_file} to {dst_file}")
