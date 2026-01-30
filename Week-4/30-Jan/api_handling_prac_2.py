import requests
from datetime import datetime
import logging

params = {
    "page": 1,
    "limit": 3
}

url = "https://api.freeapi.app/api/v1/public/youtube/playlists"

logging.basicConfig(filename='api_handling_logfile.log',
                    filemode='a',
                    level=logging.ERROR,
                    format="%(asctime)s : %(name)s : %(levelname)s \t %(message)s",
                    datefmt="%d-%b-%y %H:%M:%S", 
)
logger = logging.getLogger('Playlist')
logger.info("This log is created to keep the track of errors during API handling")

try:
    res = requests.get(url, params=params)
    # print(res.url)
    response = res.json()
    
    print(response["statusCode"])
    print(response["success"])
    print(response["message"])

    if response["success"]:
        data_resp = response["data"]["data"]
        for playlist_data in data_resp:
            playlist = playlist_data["snippet"]
            
            dat = playlist["publishedAt"]
            # print(dat.split('T')[1].split('Z')[0])
            time_part = datetime.strptime(dat, "%Y-%m-%dT%H:%M:%SZ").time()
            
            print(f'\n\nTitle of the playlist is {playlist["title"]} and published at {time_part}')
            print(f'Channel name is {playlist["channelTitle"]}')
            print(f'Description of the playlist : {playlist["description"]}')
    else:
        print("Error: ", response["statusCode"])
except Exception as e:
    print("API Error: ", e)
    logger.error(e)