import requests
from PIL import Image
from io import BytesIO

payload = {
    "name": 'Aasutosh',
    "company": 'Shivvilion Solutions'
}

res = requests.get("https://httpbin.org/get")
print(res.text)



# POST req testing - Creates new data(json): form submit, signup, upload

res = requests.post("https://httpbin.org/post", json=payload)
print(res.url)


# PUT req testing - Update full data

res = requests.put("https://httpbin.org/put", data=payload)
print(res.text)



# Image download

url = "https://i.pinimg.com/1200x/d0/27/6c/d0276c85756a60803cbc88db654661b8.jpg"
res = requests.get(url=url)
i = Image.open(BytesIO(res.content))

img = open("dhoni.jpg", 'wb')
i.save(img)
img.close()
