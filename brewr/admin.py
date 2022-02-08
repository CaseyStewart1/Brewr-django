from django.contrib import admin
from .models import InType
from .models import Ingredient
from .models import Style
from .models import Beer

# Register your models here.
admin.site.register(InType)
admin.site.register(Ingredient)
admin.site.register(Style)
admin.site.register(Beer)
