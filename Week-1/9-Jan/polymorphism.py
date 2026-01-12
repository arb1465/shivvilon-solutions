# Polymorphism


# Operator overloading

print(4+3)
print("Aasutosh " + "Baraiya")
print([1,3,4] + [2,6,7])

class Complex:
    def __init__(self, real, img):
        self.real = real
        self.img = img
    
    def showNum(self):
        print(self.real, "i +", self.img, "j")
    
    def __add__(self, n2):  # Dunder Fxn
        newReal = self.real + n2.real
        newImg = self.img + n2.img
        
        return Complex(newReal, newImg)

n1 = Complex(1,2)
print(n1.showNum())

n2 = Complex(4,3)
print(n2.showNum())

# n3 = n1.add(n2)  # For normal method
n3 = n1 + n2
print(n3.showNum())

