#!/bin/bash
urls=(
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.22.08%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.22.45%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.23.22%20PM.png"
)
for url in "${urls[@]}"; do
  status=$(curl -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" -o /dev/null -s -w "%{http_code}" "$url")
  echo "$status $url"
done
