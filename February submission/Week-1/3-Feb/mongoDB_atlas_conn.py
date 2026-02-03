from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()
mongo_url = os.getenv("MONGODB_URL")

print(mongo_url)
client = MongoClient(mongo_url)
db = client["mehendiDB"]  # DB
collection = db["galleryimages"]  # Collection(Table)

print(client.list_database_names())

f = open("data.txt", 'a+')

for doc in collection.find():
    print(doc)
    # f.write(str(doc) + "\n")

f.close()


