from operator import truediv
from re import S
from urllib import response
from django.shortcuts import render
from django.http import HttpResponse

from django.shortcuts import render
# from rest_framework import viewsets
# from .serializers import NotebookSerializer
from .models import Notebook, Note



def index(request):
    request.session.set_test_cookie()
    print(request.session.keys())
    

    num_visits = request.session.get('num_visists',0)
    request.session['num_visits'] = num_visits + 1

    # if request.session.get('has_commented', False):
    #     return HttpResponse("You've already commented.")
    # # c = comments.Comment(comment=new_comment)
    # # c.save()
    # request.session['has_commented'] = True
    # response = HttpResponse(f'{num_visits}')
    # response.headers['Access-Control-Allow-Credentials'] = True
    # response.headers['Access-Control-Allow-Headers'] = ["accept",
    # "accept-encoding",
    # "authorization",
    # "content-type",
    # "dnt",
    # "origin",
    # "user-agent",
    # "x-csrftoken",
    # "x-requested-with",]

    # response.set_cookie("fromServer","69",samesite="None",secure=True)

    return HttpResponse(f'{num_visits}')
# Create your views here.

def detail(request, note_id):

    #get info
    latest_notes_list = Note.objects.order_by('-made_on')
    output = ', '.join([q.body for q in latest_notes_list])

    print(request.session)

    return HttpResponse(request.session)

import datetime

# class NotebookView(viewsets.ModelViewSet):
    # serializer_class = NotebookSerializer
    # Notebook.objects.prefetch_related('notes_in_notebook')
    # queryset = Notebook.objects.prefetch_related('notes_in_notebook')

