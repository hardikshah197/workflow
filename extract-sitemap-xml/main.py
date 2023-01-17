'''
script for task to fetch the sitemap
'''
import sys
import requests

def fetch_sitemaps(url):
    '''
    fetch the sitemap
    '''
    print(f"url is {url}")
    content = requests.get(url)
    with open("sitemap.xml", "w") as file:
        file.write(content.text)
    print("sitemap fetched")
if __name__ == "__main__":
    # collect the command line argument
    dictionary = {}
    for arg in sys.argv:
        try:
            key,val = arg.split("=")
            dictionary[key] = val
        except:
            pass
    # fetch xml (sitemap) content
    fetch_sitemaps(dictionary["url"])
