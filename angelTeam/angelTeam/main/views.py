from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.

def main(request):
    return render(request, 'main/main.html')

def cs(request):
    return render(request, 'main/CS.html')

def store(request):
    return render(request, 'main/store.html')

def menu(request):
    return render(request, 'main/menu.html')

def event(request):
    return render(request, 'main/list.html')

def eventView(request):
    return render(request, 'main/view.html')