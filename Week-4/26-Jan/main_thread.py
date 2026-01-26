import threading


def base():
    print("This is base")
    t2 = threading.Thread(target=child)
    print("Daemon nature of t2 -->", t2.daemon)
    t2.start()
    # t2.join()


def child():
    print("This is child fxn")

t1 = threading.Thread(target=base)
# t1.daemon = True
print("Daemon nature of t1 -->", t1.daemon)
t1.start()



main_thread = threading.current_thread()
print("Is main thread Daemon? -->", main_thread.daemon)