# Library Mang
from datetime import datetime

class Book:
    def __init__(self, title, author, book_id):
        self.title = title
        self.author = author
        self.book_id = book_id
        self.issueDate = None
        self.issueTo = None
        

class Member:
    def __init__(self, name, member_id):
        self.name = name
        self.member_id = member_id


class Library:
    def __init__(self):
        self.booksList = []
        self.membersList = []
    
    def addBook(self, book):
        self.booksList.append(book)
    
    def addMember(self, member):
        self.membersList.append(member)
    
    def issueBook(self, book, member, issueDate):
        book.issueDate = issueDate
        book.issueTo = member
    
    def returnBook(self, book, returnDate):
        dateDiff = (returnDate - book.issueDate).days
        fine = self.calFine(dateDiff)
        
        print("Fine of:", fine, "is on", book.issueTo.name)
        
        book.issueDate = None
        book.issueTo = None
    
    def calFine(self, dateDiff):
        return 5*(dateDiff - 7) if dateDiff > 7 else 0

b1 = Book("How to win friends", "I'm not pote", 56568)
b2 = Book("How to win family", "I'm pote", 65661)
b3 = Book("How to win neighbours", "Why do u want", 55588)
b4 = Book("How to win relatives", "By success", 56874)

m1 = Member("ARB", 12354)
m2 = Member("Aasutosh", 13548)
m3 = Member("Santosh", 18383)


lib = Library()
lib.addBook(b1)
lib.addBook(b3)
lib.addBook(b4)

lib.addMember(m1)
lib.addMember(m2)

lib.issueBook(b1, m1, datetime(year=2026, month=1, day=13))
lib.returnBook(b1, datetime(year=2026, month=1, day=23))

for book in lib.booksList:
    print(f"Book '{book.title}' is written by ' {book.author} ' and book id is: {book.book_id}")