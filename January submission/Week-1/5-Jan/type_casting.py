# Type Casting


# Implicit

num = 7
print("Float num:", float(num), "is type of", type(float(num)))  # Float
print("Complex num:", complex(num), "is type of", type(complex(num)))  # Complex
print("String is:", str(num), "is type of", type(str(num)))  # String

num = 7.5
print("Int num:", int(num), "is type of", type(str(num)))  # Int

num = -4.3
print("Int num:", int(num), "is type of", type(str(num)))

string = "Aasutosh"
print(list(string), "is type of", type(list(string)))  # List
print(tuple(string), "is type of", type(tuple(string)))  # Tuple
print(set(string), "is type of", type(set(string)))  # Set
print(bool(string), "is type of", type(bool(string)))  # Bool


# Explicit

a = 10        # int
b = 2.5       # float

print(a + b, "is type of", type(a + b))  # Float
print(a * b, "is type of", type(a * b))  # Float