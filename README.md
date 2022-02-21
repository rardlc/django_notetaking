# django_notetaking

A note taking app, a WIP to practice working with a popular python web framework

# Try it out
To clone my setup, you will need a mySQL/MariaDB instance running, with a database named 'notes'. Inside django_notetaking/settings.py -> DATABASES = {} constant you will write:
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'notes',
        'USER': 'root',
        'PASSWORD': "", #password_to_user
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}
```
To populate your database with the right tables and fields, execute django model migration:
$ python manage.py makemigrations
$ python manage.py migrate


To run the backend dev server:
$ python manage.py runserver

To run the frontend dev server - go into /frontend and follow the steps there


Currently there is no interaction, but django exposes a REST API to access values from the DB using the URL like:
http://localhost:8000/api/notes/ - which will give you all the notebooks and notes


