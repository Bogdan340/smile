from django import forms
from .widgets import PhoneInput

class PhoneFormField(forms.CharField):
    widget = PhoneInput

    def clean(self, value):
        value = super().clean(value)
        return value