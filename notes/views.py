from django.shortcuts import render
from django.http import HttpResponse

from django.shortcuts import render
from rest_framework import viewsets
from .serializers import NotebookSerializer
from .models import Notebook



def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
# Create your views here.

class NotebookView(viewsets.ModelViewSet):
    serializer_class = NotebookSerializer
    # Notebook.objects.prefetch_related('notes_in_notebook')
    queryset = Notebook.objects.prefetch_related('notes_in_notebook')

