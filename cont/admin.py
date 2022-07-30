from django.contrib import admin
from .models import Contacts, Likes

# Register your models here.

class ContactsAdmin(admin.ModelAdmin):
    list_display = ('nome', 'email', 'subject', 'mensagem')
    display_link = ('id', 'titulo_projeto')
    
class LikesAdmin(admin.ModelAdmin):
    list_display = ('id', 'ip')
    display_link = ('id', 'ip')
    

admin.site.register(Likes, LikesAdmin)
admin.site.register(Contacts, ContactsAdmin)
