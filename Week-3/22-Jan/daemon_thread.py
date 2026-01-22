import threading
import time

def worker():
    while True:
        print("Worker running...")
        time.sleep(1)


t = threading.Thread(target=worker)
t.daemon = True  # if not there then program will run infinitely
t.start()

print(t.daemon)
print("Main thread done")
