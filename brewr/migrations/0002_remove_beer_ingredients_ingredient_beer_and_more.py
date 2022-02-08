# Generated by Django 4.0.2 on 2022-02-08 19:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('brewr', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='beer',
            name='ingredients',
        ),
        migrations.AddField(
            model_name='ingredient',
            name='beer',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='beers', to='brewr.beer'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='beer',
            name='abv',
            field=models.CharField(max_length=100),
        ),
    ]
