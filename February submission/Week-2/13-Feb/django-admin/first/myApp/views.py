from django.shortcuts import render

# Create your views here.

def all_myApp(req):
    return render(req, 'myApp/all_myApp.html')