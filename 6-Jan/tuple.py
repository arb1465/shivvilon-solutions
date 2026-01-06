# Tuple Operations and Methods

tup = (1,2,4,5,3,3,6,8)
print(tup, ", Length is", len(tup))

ind = 2
print("Num at ind:", ind, "is", tup[ind])

ind2 = -1
print("Num at index:", ind2, "is", tup[ind2])

ind2 = 6
print("Num tuple from ind:", ind, "to", ind2, "is", tup[ind:ind2])
print("Num tuple from ind: -4 to -1 is", tup[-4:-1])  # Direction left to right

newtup = tup
print(newtup)

cntEle = 3
print("Total num of", cntEle, "is", tup.count(cntEle))  # Counting

print(tup.index(4))  # Searching