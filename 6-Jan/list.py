# List Operations and Methods

lis = [1,4,3,5,2,6,9,7]
print(lis, f", Length is {len(lis)}")

lis.append(8)
print(lis)

ind = 2
print("Num at index:", ind, "is", lis[ind])

ind2 = -1
print("Num at index:", ind2, "is", lis[ind2])

ind2 = 6
print("Num list from ind:", ind, "to", ind2, "is", lis[ind:ind2])
print("Num list from ind: -4 to -1 is", lis[-4:-1])  # Direction left to right

lis[1] = 5
print("Replaced at ind 1:", lis)

lis[1:3] = [2]  # Replace the sublist
print("Replaced list:", lis)

lis.insert(6, 10)
print("Inserted one val:", lis)

lis2 = [11,12,13]
lis2.extend(lis)
print(lis2)

lis.remove(2)
print("Removed one val:", lis)

lis.sort(reverse=True)  # Sorting
print("Sorted list:", lis)

newLis = lis
print(newLis)

lis.reverse()
print("Reversed list", lis)