import os

# age = input("Enter your age: ")
file = open("data.txt", "w")
# file.write(age)
file.close()

print("\nType of file handler", type(file))
print("File encoding is:", file.encoding, end="\n\n")



# file = open("about.txt", "r")

# if os.path.isfile("About.txt"):
#     line = file.read()
#     print(f"Data of file {file.name} is : {line}")
# else:
#     print("File does not exist")

# file.close()


with open("about.txt", 'a') as file:
    # read_something = file.read(12)
    # print(read_something, end=" | ")
    
    # read_something = file.read(12)
    # print(read_something)
    
    
    # line = file.readline()
    # print(line, end="")
    
    # line = file.readline(10)
    # print(line)
    
    
    # data = file.readlines()  # list of lines
    # for d in data:
    #     print(d, end="")
    
    # print(list(file))  # list of lines
    # for line in file:
    #     print(line, end="")
    
    # file.read(13)
    # print(file.tell())  # tracks pointer's location
    
    # print(file.read(25))
    # file.seek(0)  # change the location of pointer
    # print(file.read())
    
    file.write("\nThank you for connecting!")
    