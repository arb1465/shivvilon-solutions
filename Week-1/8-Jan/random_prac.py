import random as ra

a = [1,2,3,4,5,6,7]
print(ra.choice(a))

print(ra.randint(3, 52))  # Random int in the range

ra.seed(67)  # arg = any num or string which can be identify unique to computer
print(ra.random())

print(ra.sample(a, 2))  # Number of random ele from given sequence

ra.shuffle(a)
print(a)

print(ra.getrandbits(4))
print(ra.randrange(1,234))
print(ra.uniform(2.3, 56.2))