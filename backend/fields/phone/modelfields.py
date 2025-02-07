from django.core.exceptions import ValidationError
from django.db.models import CharField
from .phonecodes import phone_codes
from .formfield import PhoneFormField
import re

class PhoneField(CharField):
    """Field для хранения и валидации номера телефона"""
    def __init__(self, *args, **kwargs):
        kwargs["max_length"] = 16
        super().__init__(*args, **kwargs)

    def db_type(self, connection):
        return 'varchar(16)'

    def from_db_value(self, value, expression, connection):
        return value

    def set_value(self, value):
        value = value.replace() if isinstance(value, str) else str(value)
        self.init_number = value
        value = re.sub(r'[+- ()]', '', value)
        if len(value) < 11:
            raise ValueError("The number must be at least 11 digits long.")
        self.code_country = value[0:len(value)-9]
        if not self.code_country in phone_codes:
            raise ValueError("Unknown country code.")
        self.country = phone_codes[self.code_country]        
        self._value = value
    
    def formfield(self, **kwargs):
        defaults = {'form_class': PhoneFormField}
        defaults.update(kwargs)
        return super().formfield(**defaults)
    
    @property
    def value(self):
        """Геттер для получения значения."""
        return self._value
    
    def __str__(self):
        return self.get_prep_value()