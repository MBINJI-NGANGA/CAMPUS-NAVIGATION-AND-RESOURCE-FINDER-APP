from django.contrib  import admin
from .models import API 

admin.site.register(API)

def __str__(self):
    return self.name + ' ' + self.description
