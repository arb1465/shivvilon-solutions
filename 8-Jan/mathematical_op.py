import numpy as np

arr = np.array([
    [1,2,3],
    [5,4,6],
    [7,8,9]
])

arr2 = np.array([
    [8,7,6],
    [2,3,1],
    [0,1,0]
])

print(arr + arr2)  # Mat addition
print(arr2 - arr)
print(arr2 * arr)
print(np.sqrt(arr))
print("Max:", arr.max())
print("Min:", arr.min())
print("Sum:", arr.sum())
print("Mean:", arr.mean())

print(np.count_nonzero(arr2))
print(np.where(arr2>3))  # Gives tuples of rows and cols
print(np.nonzero(arr2))
