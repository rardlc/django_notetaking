from rest_framework import serializers
from .models import Notebook
from .models import Note


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('body', 'made_on',)

class NotebookSerializer(serializers.ModelSerializer):
    '''
    In order to prevent the N+1 query issue, you will need to override the queryset on your view. 
    In the case of a generic view, this would be done on the queryset attribute or within 
    the get_queryset method like queyset = House.objects.prefetch_related('room_set'). 
    This will request all of the related rooms alongisde the request for the House object, 
    so instead of N+1 requests you will only have two requests.

    https://stackoverflow.com/questions/27211747/django-serialize-multiple-objects-in-one-call
    '''
    notes = NoteSerializer(read_only=True, source="notes_in_notebook", many=True)

    class Meta:
        model = Notebook
        fields = ('id', 'title', 'made_on','notes')
