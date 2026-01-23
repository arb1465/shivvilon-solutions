import queue
import threading
import time


def customer_order(que):
    items = int(input("Enter the total no of items: "))
    for item in range(items):
        item = input("Enter the item name: ")
        time.sleep(3)
        que.put(item)   
        
    que.put(None)

def kitchen_order(que):
    while True:
        item = que.get()
        if item == None:
            break
        
        print(f"Item {item} is ready")
        que.task_done()
        time.sleep(1)
        
    print("Meal is ready")


que = queue.Queue()
t1 = threading.Thread(target=customer_order, args=(que,))
t2 = threading.Thread(target=kitchen_order, args=(que,))

t1.start()
time.sleep(2)
t2.start()