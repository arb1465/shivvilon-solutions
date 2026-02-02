from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client["shivvilon_solutions"]
collection = db["about"]

# print(db)
# print(collection)
print("MongoDB connected successfully")



collection.insert_one(
    {
        "name": "ARB",
        "company": "Shivvilon Solutions",
    }
)

collection.insert_many([
    {"name": "Aasutosh", "role": "Intern"},
    {"name": "Santosh", "role": "Intern"}
])



collection.update_one(
    {"name": "ARB"},
    {"$set": {"role": "Full-Stack Developer Intern"}}
)



for doc in collection.find({"name": "Santosh"}):
    print(doc)

doc = collection.find_one({"name": "ARB"})
print(doc)



collection.delete_one({"name": "Santosh"})
