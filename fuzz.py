import urllib.request
import urllib.error

base = "https://d3liyurciwi0wb.cloudfront.net/iitlogo/ScreenshotX2026-09-16XatX3.23.22XPM.png"

spaces = ["%20", "+", "%A0", "%E2%80%82", "%E2%80%83"]

for s1 in spaces:
    for s2 in spaces:
        for s3 in spaces:
            for s4 in spaces:
                url = base.replace("X", s1, 1).replace("X", s2, 1).replace("X", s3, 1).replace("X", s4, 1)
                try:
                    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
                    resp = urllib.request.urlopen(req)
                    if resp.status == 200:
                        print("FOUND:", url)
                except urllib.error.HTTPError as e:
                    pass
