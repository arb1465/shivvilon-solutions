# Semaphore lock - allows nums of thread to allow critical section

from threading import Thread, Semaphore
import time

sem = Semaphore(2)

def cs(nm):
    sem.acquire()
    sem.acquire()
    
    for i in range(3):
        print("Critical Section, acquired by", nm)
    time.sleep(.3)
    
    sem.release()
    sem.release()

t1 = Thread(target=cs, args=('Thread-1',))
t2 = Thread(target=cs, args=('Thread-2',))
t3 = Thread(target=cs, args=('Thread-3',))
t4 = Thread(target=cs, args=('Thread-4',))
t5 = Thread(target=cs, args=('Thread-5',))

t1.start()
t2.start()
t3.start()
t4.start()
t5.start()