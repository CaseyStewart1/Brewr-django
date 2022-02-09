from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('styles/', views.StyleList.as_view(), name='style_list'),
    path('styles/<int:pk>', views.StyleDetail.as_view(), name='style_detail'),
    path('beers/', views.BeerList.as_view(), name="beer_list"),
    path('beers/<int:pk>', views.BeerDetail.as_view(), name="beer_detail"),
    path('inTypes/', views.InTypeList.as_view(), name='inType_list'),
    path('inTypes/<int:pk>', views.InTypeDetail.as_view(), name='inType_detail'),
    path('ingredients/', views.IngredientList.as_view(), name="ingredient_list"),
    path('ingredients/<int:pk>', views.IngredientDetail.as_view(),
         name="ingredient_detail"),
]
