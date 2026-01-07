# NumPy

import numpy as np

a = np.array([1, 2, 3, 4, 5])
print(a, type(a))
print(a[1])
print(a[1:3])
print(a[-5:-1])

c = np.array([
    [1,2,3], 
    [4,5,6], 
    [7,8,9]
])
print(c)
print(c[0,1])
print(c[1,:]) # Row
print(c[:,2]) # Column
print(c[1:3, 1:3]) # Sub-matrix : [row-range, col-range]
print(c[1:, 1:2])
print(c.flatten())
print(c.transpose())

b = np.array([6, 7, 8, 9, 10])
print(a + b)

a = np.abs(-7)
print(a)

b = np.add(a, b)
print(b)
