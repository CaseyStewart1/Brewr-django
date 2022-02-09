from rest_framework import generics
from .serializers import StyleSerializer, BeerSerializer, InTypeSerializer, IngredientSerializer
from .models import Style, Beer, InType, Ingredient


class StyleList(generics.ListCreateAPIView):
    queryset = Style.objects.all()
    serializer_class = StyleSerializer


class StyleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Style.objects.all()
    serializer_class = StyleSerializer


class BeerList(generics.ListCreateAPIView):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer


class BeerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Beer.objects.all()
    serializer_class = BeerSerializer


class InTypeList(generics.ListCreateAPIView):
    queryset = InType.objects.all()
    serializer_class = InTypeSerializer


class InTypeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Style.objects.all()
    serializer_class = StyleSerializer


class IngredientList(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class IngredientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
