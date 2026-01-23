import threading
import time

cond = threading.Condition()

def input_data():
    cond.acquire()
    global a,b
    a,b = map(int, input("Enter two numbers: ").split())
    time.sleep(2)
    
    cond.notify_all()
    
    cond.release()

def sum():
    cond.acquire()
    cond.wait()
    
    print(f"Summation of {a} and {b} is:", a+b)
    time.sleep(0.5)
    
    cond.release()

def subtract():
    cond.acquire()
    cond.wait()
    
    print(f"Subtraction of {a} and {b} is:", a-b)
    time.sleep(0.5)
    
    cond.release()

def multiply():
    cond.acquire()
    cond.wait()
    
    print(f"Multiplication of {a} and {b} is:", a*b)
    time.sleep(0.5)
    
    cond.release()

t = threading.Thread(target=input_data)
t1 = threading.Thread(target=sum)
t2 = threading.Thread(target=subtract)
t3 = threading.Thread(target=multiply)

t1.start()
t2.start()
t3.start()
t.start() 