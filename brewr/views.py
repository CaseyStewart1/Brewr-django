from django.shortcuts import render

# Create your views here.
from .models import Style, Beer, InType, Ingredient


def style_list(request):
    styles = Style.objects.all()
    return render(request, 'brewr/style_list.html', {'styles': styles})


def style_detail(request, pk):
    style = Style.objects.get(id=pk)
    return render(request, 'brewr/style_detail.html', {'style': style})


def beer_list(request):
    beers = Beer.objects.all()
    return render(request, 'brewr/beer_list.html', {'beers': beers})


def beer_detail(request, pk):
    beer = Beer.objects.get(id=pk)
    return render(request, 'brewr/beer_detail.html', {'beer': beer})


def inType_list(request):
    inTypes = InType.objects.all()
    return render(request, 'brewr/inType_list.html', {'inTypes': inTypes})


def inType_detail(request, pk):
    inType = InType.objects.get(id=pk)
    return render(request, 'brewr/inType_detail.html', {'inType': inType})


def ingredient_list(request):
    ingredients = Ingredient.objects.all()
    return render(request, 'brewr/ingredient_list.html', {'ingredients': ingredients})


def ingredient_detail(request, pk):
    ingredient = Ingredient.objects.get(id=pk)
    return render(request, 'brewr/ingredient_detail.html', {'ingredient': ingredient})
