from .basesettings import *

DEBUG = True

ALLOWED_HOSTS = []

CORS_ALLOWED_ORIGINS = ["http://127.0.0.1:3000", "http://localhost:3000"]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}