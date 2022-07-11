from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

# 게시판
from django.forms import ModelForm
from .models import *

class UserForm(UserCreationForm):
    email = forms.EmailField(label="이메일")

    class Meta:
        model = User
        fields = ("username", "email")


# 게시판
class BoardForm(ModelForm):
    class Meta:
        model = Board
        fields = ['title', 'content']