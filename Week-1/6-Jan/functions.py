# Functions

def helloWorld() :
    print("Hello World!")
helloWorld()

def doSomething(a) :
    print("Curr a:", a)
    a += 2
    print("New a:", a)
doSomething(3)

def addThis(a, b) :
    c = a + b
    return c
ans = addThis(3, 4)
print("Ans of addition:", ans)

def defaultArg(a = 7, b = 9) :
    c = a*b
    print(c)
defaultArg(4, 5)  # 20
defaultArg(2)  # 18
defaultArg()  # 63

def findSum(c) :
    sum = 0
    for i in range(c) :
        sum += i+1
    return sum
print(findSum(10))

def fact(a) :
    if a <= 1 :
        return 1
    
    return a*fact(a-1)
print(fact(5))


k = 3
def inc() :
    global k
    k += 1
    print(k)
inc()
