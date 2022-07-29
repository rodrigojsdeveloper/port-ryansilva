from django.contrib import admin
from .models import Contacts

# Register your models here.

class ContactsAdmin(admin.ModelAdmin):
    list_display = ('nome', 'email', 'subject', 'mensagem')
    display_link = ('id', 'titulo_projeto')
    



admin.site.register(Contacts, ContactsAdmin)