import feedparser
import json

URL = "http://www.aaronsw.com/2002/feeds/pgessays.rss"

rss = feedparser.parse(URL)

essays = {}

for link in rss.entries:
    essays[link.link] = link.title

jsonData = json.dumps(essays)

file = open('pg-essays.json', 'w')
file.write(jsonData)
file.close()