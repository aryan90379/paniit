from bing_image_downloader import downloader
import os
import shutil

speakers = [
    'Narendra Modi official portrait',
    'APJ Abdul Kalam official portrait',
    'Manmohan Singh official portrait',
    'Sri Sri Ravi Shankar official portrait',
    'Bill Clinton official portrait',
    'Bill Gates official portrait',
    'NR Narayana Murthy official portrait',
    'Manohar Parrikar official portrait',
    'Amartya Sen official portrait',
    'Nandan Nilekani official portrait',
    'Thawar Chand Gehlot official portrait',
    'Vinod Khosla official portrait',
    'A S Kiran Kumar official portrait',
    'Carl Bass official portrait',
    'Nitin Gadkari official portrait',
    'Piyush Goyal official portrait',
    'Abhay Karandikar official portrait',
    'MK Stalin official portrait'
]

file_map = {
    'Narendra Modi official portrait': 'modi',
    'APJ Abdul Kalam official portrait': 'kalam',
    'Manmohan Singh official portrait': 'manmohan',
    'Sri Sri Ravi Shankar official portrait': 'ravisankar',
    'Bill Clinton official portrait': 'clinton',
    'Bill Gates official portrait': 'gates',
    'NR Narayana Murthy official portrait': 'murthy',
    'Manohar Parrikar official portrait': 'parrikar',
    'Amartya Sen official portrait': 'amartya',
    'Nandan Nilekani official portrait': 'nilekani',
    'Thawar Chand Gehlot official portrait': 'gehlot',
    'Vinod Khosla official portrait': 'khosla',
    'A S Kiran Kumar official portrait': 'kiran',
    'Carl Bass official portrait': 'bass',
    'Nitin Gadkari official portrait': 'gadkari',
    'Piyush Goyal official portrait': 'goyal',
    'Abhay Karandikar official portrait': 'karandikar',
    'MK Stalin official portrait': 'stalin'
}

os.makedirs('public/past-speakers', exist_ok=True)

for query in speakers:
    print(f"Downloading {query}...")
    try:
        downloader.download(query, limit=1, output_dir='downloads', adult_filter_off=False, force_replace=False, timeout=10, verbose=False)
        # Move the downloaded file
        downloaded_dir = os.path.join('downloads', query)
        files = os.listdir(downloaded_dir)
        if files:
            src_file = os.path.join(downloaded_dir, files[0])
            ext = os.path.splitext(src_file)[1]
            dst_file = os.path.join('public', 'past-speakers', file_map[query] + ext)
            shutil.copy(src_file, dst_file)
            print(f"Moved {src_file} to {dst_file}")
    except Exception as e:
        print(f"Failed {query}: {e}")

