# django_notetaking

A note taking app, a WIP to practice working with a popular python web framework and a popular javascript frontend framework

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


Currently there is some interaction, django serves plaintext data to the requesting frontend, but most of the fun auth stuff is not working because to do a cross-site deployment requires some minute changes to how Django writes cookies which doesn't feel like the most secure thing to change since browsers, django and the like agree and set these standards. It would really be a small change to the Set-Cookie header, where browsers will not enforce same-site settings but would require the browser and server to be in a secure HTTPS connection which seems like a valid way to set these CORS permissions up according to: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite#fixing_common_warnings

