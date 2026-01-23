import threading
import time

eve = threading.Event()

def producer():
    while True:
        print("Producer is producing the product...")
        eve.set()
        time.sleep(5)
        
        eve.clear()
        print("Rest of 2.5 sec for producer\n")
        time.sleep(2.5)

def consumer():
    while True:
        print("Consumer is consuming!")
        time.sleep(1)
        eve.wait()

t1 = threading.Thread(target=producer, name='producer thread')
t2 = threading.Thread(target=consumer, name='consumer thread')

t1.start()
t2.start()