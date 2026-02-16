from django.shortcuts import render
from django.shortcuts import get_object_or_404
from .models import Nalles

# Create your views here.

def all_myApp(req):
    return render(req, 'myApp/all_myApp.html')

def show_all(req):
    nalles = Nalles.objects.all()
    print(nalles)
    
    return render(
        req, 
        'myApp/show_all.html',
        {
            'nalles': nalles
        }    
    )

def nallas_detail(req, nalla_id):
    nalla = get_object_or_404(Nalles, pk=nalla_id)
    
    return render(
        req,
        'myApp/nallas_detail.html',
        {
            'nalla': nalla
        }
    )