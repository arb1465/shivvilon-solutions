class Insta:
    def __init__(self, username, password):
        self.username = username
        self.__password = password  # Private member
    
    def credentials(self):
        print("Username is:", self.username, "and password is:", self.__password)
        
    def __changePassword(self, password):  # Private method
        self.__password = password
        
    def changeUsername(self, username, password):
        self.username = username
        self.__changePassword(password)
        print("Username and password updated successfully")

a = Insta("arb_1465", "ARB_1465")

print(a.credentials())
print(a.username)
# print(a.__password)  # Error: can't access private member
print(a.changeUsername("koi_1716","KOI_1716"))
print(a.__changePassword("AK47"))  # Error: can't access private method