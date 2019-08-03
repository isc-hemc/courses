# "beatifulsoup4": Parses the http, html, xml etc... and allow us to
#                  modified or access to it.
# "requests": Allows make http, html, json, xml etc... requests.
# Create/Activate the enviroment "scraping_env".

from bs4 import BeautifulSoup
import requests as rqs
import urllib as url

def main ( ):
    for i in range ( 1, 11 ):
        # Make a request to the web page.
        response = rqs.get ( "https://xkcd.com/{}".format ( i ) )
        # Parses the document ( in this case, the content of "response" ).
        soup = BeautifulSoup ( response.content, "html.parser" )
        # Find the container/tag <div id = 'comic'>.
        image_container = soup.find ( id = "comic" )
        # Find the tag <img> nested in <div id = 'comic'> and access to its
        # attribute "src".
        image_url = image_container.find ( "img" ) [ "src" ]
        # Reference of the image.
        image_name = image_url.split ( "/" ) [ -1 ]
        # Stores the image.
        print ( "\n\tDownloading images: {} %... Image name: {}".format ( ( i / 10 ) * 100, image_name ) )
        url.request.urlretrieve ( "https:{}".format ( image_url ), image_name )

if ( __name__ == "__main__" ):
    main ( )
    print ( "" )
