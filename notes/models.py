from django.db import models

#python
import datetime

#django
from django.db import models
from django.utils import timezone

class Notebook(models.Model):
    title = models.CharField(max_length=64)
    made_on = models.DateField('Date Published')

    def __str__(self):
        return self.title

class Note(models.Model):
    body = models.CharField(max_length=516)
    made_on = models.DateField('Date Note Published')
    notebook = models.ForeignKey(Notebook, on_delete=models.CASCADE,related_name="notes_in_notebook")

    def __str__(self):
        return self.body + "in" + self.notebook.__str__()

    def was_published_recently(self):
        return self.made_on >= timezone.now() - datetime.timedelta(days=1)
    