import pickle

data = ["ARB", 7]

# Pickling = Serialization
byte = pickle.dumps(data)   # doesn't store in file
print(byte)

# Unplicking = Decerialization
new_data = pickle.loads(byte)  # doesn't store in file
print(new_data)


# Storing into file
f = open("aasutosh.arb","wb")
pickle.dump(data, f)
print("\nData sending as: ", byte)
f.close()

f1 = open("aasutosh.arb", 'rb')
new_data = pickle.load(f1)
print("Data from file aasutosh.arb is: ", new_data)
f1.close()