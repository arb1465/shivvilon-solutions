import numpy as np

arr = np.array([
    [1,2,3],
    [5,4,6],
    [7,8,9]
])

print(arr)
print("Datat Type:", arr.dtype)
print("Size:", arr.size)
print("Shape:", arr.shape)
print("Axis-0 sum:", arr.sum(axis=0))
print(arr.argmin(axis=1))
print(arr.argsort())

arr2 = np.zeros((2,3))
print(arr2)

rang = np.arange(12)
print(rang)
print(type(rang))
print(rang.reshape(3, 4))
print(rang.flatten())

lspa = np.linspace(1,10,4)  # ((Range), Total Elements)
print(lspa)

imat = np.identity(4)  # Identity 2D matrix
print(imat)

arr2 = np.array([3,2,34,98,7])
print(arr2.argmax())  # Ind of max ele
print(arr2.argmin())  # Ind of min ele
print(arr2.argsort())  # Ind of sorted ele