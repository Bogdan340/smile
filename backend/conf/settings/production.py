from .basesettings import *

DEBUG = True

ALLOWED_HOSTS = []

CORS_ALLOWED_ORIGINS = ALLOWED_HOSTS

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}