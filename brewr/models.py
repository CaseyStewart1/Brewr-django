from django.db import models

# Create your models here.


class Style(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.TextField()

    def __str__(self):
        return self.name


class InType(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.TextField()

    def __str__(self):
        return self.name


class Ingredient(models.Model):
    name = models.CharField(max_length=100)
    inType = models.ForeignKey(
        InType, on_delete=models.CASCADE, related_name='inTypes')
    origin = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name


class Beer(models.Model):
    name = models.CharField(max_length=100)
    style = models.ForeignKey(
        Style, on_delete=models.CASCADE, related_name='styles')
    abv = models.IntegerField()
    time = models.CharField(max_length=100)
    description = models.TextField()
    ingredients = models.ForeignKey(
        Ingredient, on_delete=models.CASCADE, related_name='ingredient')
    prep = models.TextField()
    steep = models.TextField()
    boil = models.TextField()
    cooldown = models.TextField()
    pitch = models.TextField()

    def __str__(self):
        return self.name
