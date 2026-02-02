# Variables and Data Types

dhoni, kohli, rohit = 7, 18, 45  # Number
print(dhoni, kohli, rohit)

csk = "Thala for a reason"  # String
print(csk)

fn, ln = "Aasutosh ", "Baraiya"  # Concate operation for string
print(fn + ln)

willDhoniPlayIPL2026 = True  # Bool
print("Will I get chance to see Dhoni playing live at Stadium this year? - ", willDhoniPlayIPL2026)

THALA = 7  # Constant
print("Constant used:", THALA)

trioList = ["M S Dhoni", "Virat Kohli", "Rohit Sharma"]  # List
print(trioList, " is type of ", type(trioList))

trioTuple = ("M S Dhoni", "Virat Kohli", "Rohit Sharma")  # Tuple
print(trioTuple,  " is type of ", type(trioTuple))

trioDict = {  # Dictionary
    "M S Dhoni" : 7, 
    "Virat Kohli" : 18, 
    "Rohit Sharma" : 45
}
print(trioDict["M S Dhoni"])

setOfEle = {1, 2, 3, 3, 4, 5, 6, 6, 7}  # Set - stores unique elements
print(setOfEle, " is type of ", type(setOfEle))