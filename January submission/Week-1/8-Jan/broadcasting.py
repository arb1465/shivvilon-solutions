import numpy as np

arr = np.array([1,4,5])
print("Addition:", arr + 3)
print("Multiplication:", arr * 5)

arr2 = np.array([
    [1,2,3],
    [5,4,6],
    [7,8,9]
])
print("Max:", arr2.max())
print("Min:", arr2.min(axis=1))
print("Sum:", arr2.sum())
print("Mean:", arr2.mean(axis=0))
print("Standard:", arr2.std())

print("Addition:\n", arr2 + arr)
print("Multiplication:\n", arr2 * arr)

res = np.where(arr%2 == 0, True, False)
print(res)