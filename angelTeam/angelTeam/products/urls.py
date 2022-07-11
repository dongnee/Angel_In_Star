# products > urls.py

from django.urls import path, include
from . import views

app_name = "products"

urlpatterns = [
    path('beverage/1', views.beverage_1, name="beverage1"),
    path('beverage/2', views.beverage_2, name="beverage2"),
    path('beverage/3', views.beverage_3, name="beverage3"),
    path('beverage/4', views.beverage_4, name="beverage4"),
    path('beverage/5', views.beverage_5, name="beverage5"),
    path('beverage/6', views.beverage_6, name="beverage6"),
    path('beverage/7', views.beverage_7, name="beverage7"),
    path('beverage/8', views.beverage_8, name="beverage8"),
    path('beverage/9', views.beverage_9, name="beverage9"),

    path('bread/1', views.bread_1, name="bread1"),
    path('bread/2', views.bread_2, name="bread2"),
    path('bread/3', views.bread_3, name="bread3"),
    path('bread/4', views.bread_4, name="bread4"),
    path('bread/5', views.bread_5, name="bread5"),
    path('bread/6', views.bread_6, name="bread6"),
    path('bread/7', views.bread_7, name="bread7"),
    path('bread/8', views.bread_8, name="bread8"),
    path('bread/9', views.bread_9, name="bread9"),

    path('coffee/1', views.coffee_1, name="coffee1"),
    path('coffee/2', views.coffee_2, name="coffee2"),
    path('coffee/3', views.coffee_3, name="coffee3"),
    path('coffee/4', views.coffee_4, name="coffee4"),
    path('coffee/5', views.coffee_5, name="coffee5"),
    path('coffee/6', views.coffee_6, name="coffee6"),
    path('coffee/7', views.coffee_7, name="coffee7"),
    path('coffee/8', views.coffee_8, name="coffee8"),
    path('coffee/9', views.coffee_9, name="coffee9"),

    path('icecream/1', views.icecream_1, name="icecream1"),
    path('icecream/2', views.icecream_2, name="icecream2"),
    path('icecream/3', views.icecream_3, name="icecream3"),
    path('icecream/4', views.icecream_4, name="icecream4"),
    path('icecream/5', views.icecream_5, name="icecream5"),
    path('icecream/6', views.icecream_6, name="icecream6"),
    path('icecream/7', views.icecream_7, name="icecream7"),
    path('icecream/8', views.icecream_8, name="icecream8"),
    path('icecream/9', views.icecream_9, name="icecream9"),
]
