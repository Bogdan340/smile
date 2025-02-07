from django.contrib import admin
from .models import CustomUser, SmsVerify

admin.site.register(CustomUser)
admin.site.register(SmsVerify)