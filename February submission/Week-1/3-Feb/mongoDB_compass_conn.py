from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017")
db = client["shivvilon_solutions"]
collection = db["nalles"]

print(db)
print(collection)
print("MongoDB connected successfully")


nalles_info = [
    {
        "name": 'Aasutosh Baraiya',
        "admission_no": 'U22CS109',
        "department": 'Computer Science',
        "song": None
    },
    {
        "name": 'Param Pathak',
        "admission_no": 'U22CS023',
        "department": 'Computer Science',
        "song": 'Ek pal ka jeena'
    },
    {
        "name": 'Akshat Sahu',
        "admission_no": 'U22CS034',
        "department": 'Computer Science',
        "song": 'Mitti di khusboo'
    },
    {
        "name": 'Chahat Bedi',
        "admission_no": 'U22EE099',
        "department": 'Electrical',
        "song": 'Tinku Jiya'
    },
    {
        "name": 'Parth Tita',
        "admission_no": 'U22EE046',
        "department": 'Electrical',
        "song": 'Yaariyaan'
    },
    {
        "name": 'Keval Hirpara',
        "admission_no": 'U22EE025',
        "department": 'Electrical',
        "song": 'Chaa vina mane chain pade nhi'
    },
    {
        "name": 'Ocean Jayant',
        "admission_no": 'U22EE106',
        "department": 'Electrical',
        "song": 'Saat samundar'
    },
    {
        "name": 'Darshit Desai',
        "admission_no": 'U22EC008',
        "department": 'Electronic',
        "song": 'Perfect'
    },
]

# res = collection.create_index("admission_no", unique=True)
# print(res, end="\n")

# collection.insert_many(nalles_info)

collection.delete_one({"admission_no": 'U22CS034'})
for doc in collection.find():
    print(doc) 
