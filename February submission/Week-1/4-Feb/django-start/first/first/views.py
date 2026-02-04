from django.http import HttpResponse
from django.shortcuts import render


def home(req):
    # return HttpResponse("Hello from Django home")
    return render(req, 'index.html')

def about(req):
    return HttpResponse("Hello, this is about page")
