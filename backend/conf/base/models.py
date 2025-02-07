from django.db import models
import uuid

"""Файл с базовыми моделями (только абстрактные модели)"""

class UUIDModel(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)

    class Meta:
        abstract = True