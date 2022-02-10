from rest_framework import serializers
from .models import Style, Beer, InType, Ingredient


class StyleSerializer(serializers.HyperlinkedModelSerializer):
  # styles below means 'beers' is actually referencing 'related name' from beer model
  # Change later if it doesn't mess with your seeding
    styles = serializers.HyperlinkedRelatedField(
        view_name='beer_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Style
        fields = ('name', 'description', 'image_url', 'styles')


class BeerSerializer(serializers.HyperlinkedModelSerializer):

    beers = serializers.HyperlinkedRelatedField(
        view_name='ingredient_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Beer
        fields = ('name',  'beers', 'abv',  'description',
                  'prep', 'steep', 'boil', 'cooldown', 'pitch')


class InTypeSerializer(serializers.HyperlinkedModelSerializer):

    inTypes = serializers.HyperlinkedRelatedField(
        view_name='ingredient_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = InType
        fields = ('name', 'description', 'image_url', 'inTypes', )


class IngredientSerializer(serializers.HyperlinkedModelSerializer):

    # beer = serializers.HyperlinkedRelatedField(
    #     view_name='ingredient_detail',
    #     many=True,
    #     read_only=True
    # )

    class Meta:
        model = Ingredient
        fields = ('name', 'description', 'origin')
