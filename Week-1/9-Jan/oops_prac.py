class Student:
    campus = "SVNIT"  # Member
    name = "ak"
    
    @staticmethod
    def classLevelMethod():
        print("This is a class level method.")
    
    # Parameterized Constructor
    def __init__(self, fn):
        # print(self)  # Reference
        self.name = fn
        # print("Created obj")
    
    def currYear(self) :
        print("Current year is 2026")

a = Student("ARB")  # Object
print(a)
print(a.name)
print(Student.name)
print(a.campus)
print(a.currYear())



class Stud:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks
    
    def get_avg(self):
        sum = 0
        for i in self.marks :
            sum += i
        
        avg_marks = sum / len(self.marks)
        return avg_marks

s = Stud("Aasutosh", [93, 82, 95])
print("Avg of PCM of", s.name, "is",s.get_avg())



class Account:
    def __init__(self, accNo, balance):
        self.balance = balance
        self.acc_no = accNo
    
    def debit(self, amt):
        if self.balance - amt < 0:
            print("Not sufficient balance in the account")
        self.balance -= amt
    
    def credit(self, amt):
        self.balance += amt
    
    def details(self):
        print("User's account no:", self.acc_no, "has total amount as", self.balance)
    
    def check_balance(self):
        print("Curr balance:", self.balance)

acc1 = Account("0313150165089", 13750)
acc1.details()
acc1.check_balance()
acc1.debit(20)
acc1.debit(12990)
acc1.debit(200)
acc1.debit(160)
acc1.debit(50)
acc1.debit(200)
acc1.check_balance()
acc1.credit(15650)
acc1.check_balance()