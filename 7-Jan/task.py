n = int(input("Enter the num: "))

sz = 2*n + 3
print("Size of mat:", sz, end="\n")

for i in range(sz) :
    if i == sz//2 :
        print("o", end=" ")
        
        print(" "*2*n, end="") # Space-1
        print("o", end=" ")
        
        print(" "*2*n, end="") # Space-2
        print("o", end=" ")
        print("")
        continue
    
    print("o", end=" ")
    if i == 0 or i == sz-1 :
        print("0 "*(sz-2), end="")
        print("o", end=" ")
        print("")
        continue

    if i < sz//2 :
        start = n - i + 1
        dup = i
    
        print(" "*2*(i-1), end="") # Space-1
        for j in range(n-i+1) :
            print(start, end=" ")
            start -= 1
        
        print(" "*2, end="")  # Middle Space
        
        print(" "*2*(n-i), end="") # Space-2
        for j in range(i) :
            print(dup, end=" ")
            dup -= 1
    else : 
        start = i - n - 1
        dup = 1
        
        for j in range(2*(n+1)-i) :
            print(dup, end=" ")
            dup += 1
        print(" "*2*(i-n-2), end="") # Space-1
    
        print(" "*2, end="")  # Middle Space
        
        dup = 1
        for j in range(i-n-1) :
            print(dup, end=" ")
            dup += 1
        print(" "*2*(2*n-i+1), end="") # Space-2
        
    print("o")