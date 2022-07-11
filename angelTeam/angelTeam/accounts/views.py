from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

from .forms import UserForm

from .forms import *
from .models import *


# Create your views here.
def signup(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('main:main')

    else:
        form = UserForm() # auth form과 user 모델을 복사해서 만든 사용자계정 클래스 #userform객체를 사용해서 렌더링할수있도록 정보를 form이라는 변수를 만들어 저장
    return render(request, 'accounts/signup.html', {'form':form})


def welcome(request):
    return render(request,'accounts/welcome.html')


# 게시판
def board(request):
    if request.method == 'POST':
        title = request.POST['title']
        content = request.POST['content']

        if request.user.is_authenticated:
            writer = request.user
            board = Board(
                title=title,
                content=content,
                writer=writer,
            )
            board.save()
            return redirect('accounts/board.html')
        else:
            return redirect('accounts/login.html')

    else:
        boardForm = BoardForm
        board = Board.objects.all()
        context = {
            'boardForm': boardForm,
            'board': board,
        }
        return render(request, 'accounts/board.html', context)


def boardEdit(request, pk):
    board = Board.objects.get(id=pk)
    if request.method == "POST":
        board.title = request.POST['title']
        board.content = request.POST['content']
        board.writer = request.user

        board.save()
        return redirect('accounts/board.html')

    else:
        boardForm = BoardForm
        return render(request, 'accounts/update.html', {'boardForm':boardForm})

def boardDelete(request, pk):
    board = Board.objects.get(id=pk)
    board.delete()
    return redirect('accounts/board.html')
