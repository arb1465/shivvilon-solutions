# Race Condition

from threading import Thread
import time

num = 7

def add():
    global num
    num += 3
    print("After addition:", num)

def sub():
    global num
    num -= 2
    print("After substraction:", num)

t1 = Thread(target=add)
t2 = Thread(target=sub)

t2.start(), t1.start()

time.sleep(1)
print("Num:", num)