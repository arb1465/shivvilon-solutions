import requests


def fetch_random_joke():
    # base_url = "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
    num = int(input("Enter num in range of 100: "))
    base_url = f"https://api.freeapi.app/api/v1/public/randomjokes/{num}"
    resp = requests.get(base_url)
    data_response = resp.json()  # To make it readable and eay to extract the informations
    
    data_joke = data_response["data"]
    joke = data_joke["content"]
    print("\n\nToday's joke is: ", joke)

while True:
    fetch_random_joke()
    ans = str(input("\nDo you like this joke? (y/n): "))
    
    if ans == "y":
        print("\nHave a nice day!")
        break
