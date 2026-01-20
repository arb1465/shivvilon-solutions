# R-Locking in python

from threading import Thread,RLock, current_thread
import time

myLock = RLock()  # Allows to acquire and release multiple times

class BusTicket():
    def __init__(self, seats, r_lock):
        self.total_seats = seats
        self.r_lock = r_lock
    
    def book(self, req_seats):
        self.r_lock.acquire()
        self.r_lock.acquire()
        
        print("Info of lock:", self.r_lock)  # Keep the info of lock
        print("Available seats:", self.total_seats)
        if self.total_seats >= req_seats:
            print(f"{req_seats} seats are booked for {current_thread().name}")
            self.total_seats -= req_seats
            print("\tRemaining seats:", self.total_seats, "\n")
        else:
            print("Sorry, not available\n")
        time.sleep(0.3)
        
        self.r_lock.release()
        self.r_lock.release()


b1 = BusTicket(4, myLock)

t1 = Thread(target=b1.book, args=(1,))
t2 = Thread(target=b1.book, args=(2,))
t3 = Thread(target=b1.book, args=(1,))
t4 = Thread(target=b1.book, args=(1,))

t1.start()
t2.start()
t3.start()
t4.start()