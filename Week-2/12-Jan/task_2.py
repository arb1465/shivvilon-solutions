# Product

class Product:
    def __init__(self, nm, price, cate):
        self.name = nm
        self.price = price
        self.category = cate

class Cart:
    def __init__(self):
        self.prodList = []
        self.total_price = 0

    def add_product(self, prod):
        self.prodList.append(prod)
    
    def remove_product(self, prod_name):
        exist = False
        
        for it in self.prodList:
            if it.name == prod_name : 
                self.prodList.remove(it)
                print(f"Product: {it.name} is removed")
                exist = True

        if not exist :
            print("Item is not in the list")
    def get_total_price(self):
        for item in self.prodList:
            self.total_price += item.price
        
        return self.total_price
    
    def apply_coupon(self, code):
        if code == "NEW10":
            self.total_price -= self.total_price*0.1
        elif code == "FLAT50" :
            self.total_price -= 50
        else:
            pass

p1 = Product("pen", 10, "stationary")
p2 = Product("pencil", 5, "stationary")
p3 = Product("drawing book", 80, "art")
p4 = Product("pad", 30, "stationary")
p5 = Product("mouse", 150, "technical")
p6 = Product("acrylic colors", 120, "art")
p7 = Product("watch", 300, "luxury")

cartList1 = Cart()
cartList1.add_product(p1)
cartList1.add_product(p2)
cartList1.add_product(p3)
cartList1.add_product(p4)
cartList1.add_product(p5)

bill1 = cartList1.get_total_price()
print("Bill amount", bill1)

cartList1.remove_product("pen")
bill1 = cartList1.get_total_price()

cartList1.apply_coupon("FLAT50")
print("Bill amount", cartList1.total_price)

print("-----")
cartList2 = Cart()
cartList2.add_product(p5)
cartList2.add_product(p6)
cartList2.add_product(p7)

bill2 = cartList2.get_total_price()
print("Bill amount", bill2)

cartList2.apply_coupon("NEW10")
print("Bill amount", cartList2.total_price)