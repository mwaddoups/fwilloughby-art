from django.urls import path

from . import views

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('artwork/<int:pk>/', views.ArtDetailView.as_view(), name='detail')
]
