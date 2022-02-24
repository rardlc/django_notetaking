# Generated by Django 4.0.2 on 2022-02-23 15:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='notebook',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notes_in_notebook', to='notes.notebook'),
        ),
    ]