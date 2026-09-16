const https = require('https');

const base = "https://d3liyurciwi0wb.cloudfront.net/iitlogo/ScreenshotX2026-09-16XatX3.23.22XPM.png";
const spaces = ["%20", "+", "%A0"];

for (let s1 of spaces) {
  for (let s2 of spaces) {
    for (let s3 of spaces) {
      for (let s4 of spaces) {
        let url = base.replace("X", s1).replace("X", s2).replace("X", s3).replace("X", s4);
        https.get(url, (res) => {
          if (res.statusCode === 200) console.log("FOUND:", url);
        });
      }
    }
  }
}
