from django.shortcuts import render

# Create your views here.

def main(request):
    return render(request, 'main/main.html')

def menu(request):
    return render(request, 'main/menu.html')