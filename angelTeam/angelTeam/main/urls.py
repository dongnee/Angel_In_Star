# main > urls.py

from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.main, name="main"),
    path('menu/',views.menu, name="menu"),
]