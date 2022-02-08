from django.urls import path
from . import views

urlpatterns = [
    path('', views.style_list, name='style_list'),
    path('styles/<int:pk>', views.style_detail, name='style_detail'),
    path('beers', views.beer_list, name='beer_list'),
    path('beers/<int:pk>', views.beer_detail, name='beer_detail'),
    path('inTypes', views.inType_list, name='inType_list'),
    path('inTypes/<int:pk>', views.inType_detail, name='inType_detail'),
    path('ingredients', views.ingredient_list, name='ingredient_list'),
    path('ingredients/<int:pk>', views.ingredient_detail, name='ingredient_detail'),
]
