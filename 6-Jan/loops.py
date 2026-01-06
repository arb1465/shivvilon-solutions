# For loop

lis = [1,2,3,4,5,6,7]
for i in lis :
    print(i)

num = 4
for i in lis :
    if num == i :
        print("Breaking the loop")
        break
    print(i)

ran = range(num)
print("Range for", num, "is", ran)

num2 = 9
ran = range(num, num2)
print("Range from", num, "to", num2, "is", ran)

for i in ran :
    print(i)



# While loop

i = 1
while i <= 7 :
    print(i, end=", ")
    i += 1

print(i)
while i <= 7 :
    i += 1
    if i == 4 :
        print("Not printin for", i, "and skipping this iteration")
        continue
    print(i)