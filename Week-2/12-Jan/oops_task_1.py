# Employee Task

class Employee:
    def __init__(self, nm, id, bs_sal):    
        self.name = nm
        self.emp_id = id
        self.base_salary = bs_sal
    
    def cal_salary(self):
        pass
    
    def display_details(self):
        print(f"Total salary of {self.name} with employee id {self.emp_id} is {self.cal_salary()}")
    

class FullTimeEmployee (Employee) :
    def cal_salary(self):
        self.salary = self.base_salary + 0.1*self.base_salary
        print("Employee salary:", self.salary)
        return self.salary

class ContractEmployee (Employee) :
    def __init__(self, nm, id, bs_sal, hr):
        super().__init__(nm, id, bs_sal)
        self.hour = hr
        
    def cal_salary(self):
        self.salary = self.base_salary*self.hour
        print("Employee salary:", self.salary)
        return self.salary

class PayrollSystem:
    def __init__(self):
        self.empList = []
    
    def add_emp(self, emp):
        self.empList.append(emp)
    
    def show_details(self):
        for ep in self.empList:
            ep.display_details()

employeelist = PayrollSystem()

emp1 = FullTimeEmployee("Emp1", 21684, 4000)
# emp1.display_details()
# emp1.cal_salary()
employeelist.add_emp(emp1)

emp2 = ContractEmployee("Emp2", 65442, 645, 5)
# emp2.display_details()
# emp2.cal_salary()
employeelist.add_emp(emp2)

employeelist.show_details()