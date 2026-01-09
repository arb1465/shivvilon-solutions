class Parent:
    def __init__(self):
        print("Parent class..")

class Child(Parent):
    def __init__(self, name):
        super().__init__()
        
        self.name = name
        print("Child class..", self.name)

child1 = Child("ARB")
print(child1.name)


class Person:
    name = "unkonwn"
    
    def cngName(self, name):
        # self.name = name  # Will not change class level member
        
        self.__class__.name = name   # Changes at class level
        Person.name = name  # Changes at class level

    @classmethod  # For class
    def chngName(cls, name):
        cls.name = name

p = Person()
p.cngName("ARB")
print(p.name)
print(Person.name)


class Stud:
    def __init__(self, marks):
        self.marks = marks
    
    @property  # Reflect on changes on below properties
    def percent(self):
        return str(sum(self.marks) / len(self.marks)) + "%"

obj = Stud([89,94,86,78,96])
print(obj.percent)

obj.marks[2] = 82
print(obj.percent)