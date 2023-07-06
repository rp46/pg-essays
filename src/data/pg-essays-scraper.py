import requests
from bs4 import BeautifulSoup
import json
import re

def getEssayMaskingTitleFromUrl(link):
    result = re.search("^http\:\/\/www.paulgraham.com\/(.*).html$", link)
    if not result or len(result.groups()) < 1:
        return link
    return result.group(1)

pgEssays = open('pg-essays.json')
articles = json.load(pgEssays)

headers_mobile = { 'User-Agent' : 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B137 Safari/601.1'}
essays = {}

for link in articles.keys():
    essay = {}
    URL = link

    page = requests.get(URL, headers=headers_mobile)
    soup = BeautifulSoup(page.content, 'html.parser')
    doc = soup.find("main")

    essay["title"] = articles[link]
    essay["html"] = str(doc)
    essayMaskingTitle = getEssayMaskingTitleFromUrl(link)
    essays[essayMaskingTitle] = essay

file = open("pg-full-articles.json", "w")
file.write(json.dumps(essays))
file.close()