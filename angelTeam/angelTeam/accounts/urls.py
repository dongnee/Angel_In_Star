from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views

app_name = 'accounts'

urlpatterns =[
    path('login/', auth_views.LoginView.as_view(template_name='accounts./login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('signup/', views.signup, name='signup'),
    path('signup/welcome.html', views.welcome, name='welcome'),
    path('board.html/', views.board, name="board"),
    path('board.html/accounts/board.html', views.board, name="acboard"),
    path('board.html/accounts/login.html', auth_views.LoginView.as_view(template_name='accounts./login.html'), name='bologin'),

    path('<int:pk>', views.boardEdit, name="editboard"),
    path('accounts/board.html', views.board, name="edboard"),
    path('/<int:pk>', views.boardDelete, name="delboard"),
    path('/accounts/board.html', views.board, name="deboard"),
]