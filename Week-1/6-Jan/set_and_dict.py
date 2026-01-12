# Set

s = {1,7,3,4,5,3,6,2}
print(s)

ele = 8
s.add(ele)
print("Element", ele, "is added:", s)

s.pop()
print("Set:", s)

s.remove(5)
print("Set:", s)


# Dictonary

jersyNum = {
    "MSD" : 7,
    "Kohli": 18,
    "Rohit": 45
}
print(jersyNum)
print("Keys: ", jersyNum.keys())
print("Values: ", jersyNum.values())

jersyNum.update({"Jadeja": 8})
print(jersyNum)

jersyNum2 = {
    "Gill" : 77,
    "Abhishek" : 4,
    "Ruturaj" : 31
}

print("Jersy num of Ruturaj:", jersyNum2.get("Ruturaj") )

jersyNum.pop("Rohit")
print(jersyNum)
