# Operators


# Arithmatic

a, b = 20, 3
print("A: ", a, " and B: ", b)
print("Arithmatic A+B:", a+b)
print("Arithmatic A-B:", a-b)
print("Arithmatic A*B:", a*b)
print("Arithmatic A/B:", a/b)
print("Arithmatic A//B:", a//b)
print("Arithmatic A%B:", a%b)
print("Arithmatic A**B:", a**b)


# Comparison

a, b = 5, 5
print("\nA: ", a, " and B: ", b)
print("Comparing A=B:", a==b)
print("Comparing A!=B:", a!=b)
print("Comparing A>B:", a>b)
print("Comparing A<B:", a<b)
print("Comparing A>=B:", a>=b)


# Logical

print("\nLogical T and T:", True and True)
print("Logical T and F:", True and False)
print("Logical F and F:", False and False)

print("Logical T or T:", True or True)
print("Logical T or F:", True or False)
print("Logical F or F:", False or False)

print("Logical not T:", not True)
print("Logical not F:", not False)


# Bitwise - apply on binary representation

a, b = 3, 4
print("\nA: ", a, " and B: ", b)
print("Bitwise A&B:", a&b)
print("Bitwise A|B:", a|b)
print("Bitwise A^B:", a^b)
print("Bitwise A>>B:", a>>b)
print("Bitwise A<<B:", a<<b)
print("Bitwise ~B:", ~b)


# Membership

listOfNum = [1,2,3,4,5]
print(listOfNum)
print(f"\n{5 in listOfNum}")
print(a not in listOfNum)


# Identity

a, b = 4, 5.2
print("\nA: ", a, " and B: ", b)
print(a is b)
print(a is not b)