#!/bin/bash
urls=(
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.22.08%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.22.45%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.23.22%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.23.38%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.23.50%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.24.03%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.24.16%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.24.27%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.24.40%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.24.57%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.25.11%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.33.49%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.34.18%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.34.29%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.34.52%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.35.10%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.35.21%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.35.33%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.35.45%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.35.55%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.36.14%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.36.27%20PM.png"
  "https://d3liyurciwi0wb.cloudfront.net/iitlogo/Screenshot%202026-09-16%20at%203.36.39%20PM.png"
)
for url in "${urls[@]}"; do
  status=$(curl -o /dev/null -s -w "%{http_code}" "$url")
  if [ "$status" != "403" ]; then
    echo "$status $url"
  fi
done
