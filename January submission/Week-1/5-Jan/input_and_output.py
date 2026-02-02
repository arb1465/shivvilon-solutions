# Input and Output

inp = input("Enter something: ")  # Takes an input and stores it in variable
print("You entered this:", inp, "and is type of", type(inp))

thala = int(inp)
print("Jersy number of 'MS Dhoni' is:", thala, "is type of", type(thala))


a1 = input().split()
print(a1, "is type of", type(a1))

a1, a2 = input().split()
print("First:", a1, " and Second:", a2, ", are type of", type(a1))

a = map(int, input().split())
print(a, "is type of", type(a))

a = list(map(int, input().split()))
print(a, "is type of", type(a))

print("Any character can be added with 'end'", end=" * ")
print("This will not be a new line")