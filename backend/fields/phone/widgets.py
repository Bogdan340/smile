from django.forms import TextInput

class PhoneInput(TextInput):
    input_type = 'tel'

    def __init__(self, *args, **kwargs):
        kwargs.setdefault('attrs', {})
        kwargs['attrs'].update({'class': 'phone-input'})
        super().__init__(*args, **kwargs)