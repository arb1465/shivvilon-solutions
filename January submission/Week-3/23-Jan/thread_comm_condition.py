# Condition Object

import threading
import time

cond = threading.Condition()

def manager():
    cond.acquire()
    print("Manager is here and calling in their cabin")
    time.sleep(2)
    cond.notify_all()
    
    cond.release()

def emp1():
    cond.acquire()
    cond.wait()
    print("Emp1 is going to cabin in 1 min")
    time.sleep(1)
    
    cond.release()

def emp2():
    cond.acquire()
    cond.wait()
    print("Emp2 is going to cabin in 1 min")
    time.sleep(1)
    
    cond.release()

def emp3():
    cond.acquire()
    cond.wait()
    print("Emp3 is going to cabin in 1 min")
    time.sleep(1)
    
    cond.release()

t = threading.Thread(target=manager)
t1 = threading.Thread(target=emp1)
t2 = threading.Thread(target=emp2)
t3 = threading.Thread(target=emp3)

t1.start()
t2.start()
t3.start()
t.start() 