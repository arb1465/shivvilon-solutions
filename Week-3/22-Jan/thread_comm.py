import threading
import time

eve = threading.Event()

def light_switch():
    while True:
        print("Light is GREEN")
        eve.set()
        time.sleep(5)

        print("Light is RED, wait for 2 seconds")
        eve.clear()
        time.sleep(2)
        
        eve.set()

def trafic_msg():
    eve.wait()
    while True:
        print("You can GO!")
        time.sleep(1)
        eve.wait()

t1 = threading.Thread(target=light_switch, name='light thread')
t2 = threading.Thread(target=trafic_msg, name='msg thread')

t1.start()
t2.start()