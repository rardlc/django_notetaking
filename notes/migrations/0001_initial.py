# Generated by Django 4.0.2 on 2022-02-20 18:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Notebook',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=64)),
                ('made_on', models.DateField(verbose_name='Date Published')),
            ],
        ),
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.CharField(max_length=516)),
                ('made_on', models.DateField(verbose_name='Date Note Published')),
                ('notebook', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='notes.notebook')),
            ],
        ),
    ]
