import threading
import math
import time
from concurrent.futures import ThreadPoolExecutor

print(threading.current_thread())
print(threading.current_thread().ident)
print(threading.current_thread().name)

def square(num):
    print(f"Square: {num*num}")
    time.sleep(1)

def cube(num):
    print(f"Cube: {num*num*num}")
    time.sleep(1)

def squareRoot(num):
    print(f"Square root: {math.sqrt(num)}")
    time.sleep(1)

def cubeRoot(num):
    print(f"Cube root: {num**(1/3)}")
    time.sleep(1)


time1 = time.perf_counter()
from threading import Thread

t1 = Thread(target=square, args=(100,))
t2 = Thread(target=cube, args=(100,))
t3 = Thread(target=squareRoot, args=(100,))
t4 = Thread(target=cubeRoot, args=(100,))

t1.start()
t2.start()
t3.start()
t4.start()

# time2 = time.perf_counter()
# print("\n\nTime for non-stopping threads:", time2 - time1, "seconds")


# # Stop threads
t1.join()
# t2.join()
# t3.join()
# t4.join()

print("All active threads", threading.enumerate())
print("Active threads", threading.active_count())

# time3 = time.perf_counter()
# print("\nTime for stopping threads:", time3 - time1, "seconds")



# print("\nThread pool...\n")
# with ThreadPoolExecutor() as ex :
#     # ex.submit(square, 100)
#     # ex.submit(cube, 100)
#     # ex.submit(squareRoot, 100)
#     # ex.submit(cubeRoot, 100)
    
#     listOfNum = [100,200,300,400,500]
#     ex.map(square, listOfNum)