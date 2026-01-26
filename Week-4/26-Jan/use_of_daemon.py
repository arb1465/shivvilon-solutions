import threading, time

def first_month():
    for i in range(4):
        print("Week:", i+1)
        time.sleep(0.5)

t1 = threading.Thread(target=first_month)
t1.daemon = True  # It will restrict
t1.start()

time.sleep(2)
print("\nEvaluation starts...")
print("Evaluation ends!")