from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth.models import BaseUserManager
from conf.base.models import UUIDModel
from fields.phone.modelfields import PhoneField

class UserManager(BaseUserManager):
    def create_user(self, phone, password=None, **extra_fields):
        if not phone:
            raise ValueError('Номер телефона должен быть указан')
        
        user = self.model(phone=phone, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user


    def create_superuser(self, phone, password=None, **extra_fields):
        extra_fields.setdefault('is_verify', True)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_vip', True)
        extra_fields.setdefault('is_dev', True)

        return self.create_user(phone, password, **extra_fields)
    
class CustomUser(UUIDModel, AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=32, unique=True, blank=True, null=True)
    email = models.EmailField(max_length=64, unique=True, blank=True, null=True)
    phone = PhoneField(unique=True, editable=False, verbose_name="Номер телефона")
    first_name = models.CharField(max_length=32, blank=True, null=True)
    last_name = models.CharField(max_length=32, blank=True, null=True)
    surname = models.CharField(max_length=32, blank=True, null=True)
    is_verify = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_dev = models.BooleanField(default=False)
    is_vip = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['phone']
    objects = UserManager()


class SmsVerify(UUIDModel, models.Model):
    code = models.IntegerField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    time_create = models.DateTimeField(auto_now_add=True)