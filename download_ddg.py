from duckduckgo_search import DDGS
import urllib.request
import os
import ssl
import time

ssl._create_default_https_context = ssl._create_unverified_context
os.makedirs('public/past-speakers', exist_ok=True)

speakers = [
    'Narendra Modi portrait high quality',
    'APJ Abdul Kalam portrait high quality',
    'Manmohan Singh portrait high quality',
    'Sri Sri Ravi Shankar portrait high quality',
    'Bill Clinton portrait high quality',
    'Bill Gates portrait high quality',
    'NR Narayana Murthy portrait high quality',
    'Manohar Parrikar portrait high quality',
    'Amartya Sen portrait high quality',
    'Nandan Nilekani portrait high quality',
    'Thawar Chand Gehlot portrait high quality',
    'Vinod Khosla portrait high quality',
    'A S Kiran Kumar portrait high quality',
    'Carl Bass portrait high quality',
    'Nitin Gadkari portrait high quality',
    'Piyush Goyal portrait high quality',
    'Abhay Karandikar portrait high quality',
    'MK Stalin portrait high quality'
]

file_map = {
    'Narendra Modi portrait high quality': 'modi.jpg',
    'APJ Abdul Kalam portrait high quality': 'kalam.jpg',
    'Manmohan Singh portrait high quality': 'manmohan.jpg',
    'Sri Sri Ravi Shankar portrait high quality': 'ravisankar.jpg',
    'Bill Clinton portrait high quality': 'clinton.jpg',
    'Bill Gates portrait high quality': 'gates.jpg',
    'NR Narayana Murthy portrait high quality': 'murthy.jpg',
    'Manohar Parrikar portrait high quality': 'parrikar.jpg',
    'Amartya Sen portrait high quality': 'amartya.jpg',
    'Nandan Nilekani portrait high quality': 'nilekani.jpg',
    'Thawar Chand Gehlot portrait high quality': 'gehlot.jpg',
    'Vinod Khosla portrait high quality': 'khosla.jpg',
    'A S Kiran Kumar portrait high quality': 'kiran.jpg',
    'Carl Bass portrait high quality': 'bass.jpg',
    'Nitin Gadkari portrait high quality': 'gadkari.jpg',
    'Piyush Goyal portrait high quality': 'goyal.jpg',
    'Abhay Karandikar portrait high quality': 'karandikar.jpg',
    'MK Stalin portrait high quality': 'stalin.jpg'
}

with DDGS() as ddgs:
    for query in speakers:
        print(f"Searching for {query}...")
        results = list(ddgs.images(query, max_results=1))
        if results:
            url = results[0]['image']
            filename = file_map[query]
            try:
                print(f"Downloading from {url}")
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=10) as response:
                    with open(f"public/past-speakers/{filename}", 'wb') as f:
                        f.write(response.read())
            except Exception as e:
                print(f"Failed to download {url}: {e}")
        time.sleep(2)
