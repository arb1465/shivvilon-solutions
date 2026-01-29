import json

about = {
    'name': 'Aasutosh',
    'age': 21,
    'hometown': "Rajkot",
    'isCommitted': False,
    'college': 'NIT Surat',
    'number': 9664758560
}

name = 'ARB'
data2 = ('Aasutosh Baraiya', 21, False, None)

# JSON data format of string type

print("Json data:\n", json.dumps(about), "\nis a type of:", type(json.dumps(about)))
# print(json.dumps(name))

json.dumps(about, indent=3)
json.dumps(about, indent=3, separators=(".","|"))
json.dumps(about, indent=3, separators=(".","|"), sort_keys=True)



# Storing and creating JSON data file

file = open("about.json", 'w')
json.dump(about, file, indent=3)
file.close()

# Fetching from JSON data file

file = open("about.json", 'r')
py_data = json.load(file)
print(f"\nPython data:\n{py_data} \nis type of: {type(py_data)}")