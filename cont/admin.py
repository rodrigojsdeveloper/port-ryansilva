from django.contrib import admin
from .models import Projects

# Register your models here.

class ProjectsAdmin(admin.ModelAdmin):
    list_display = ('titulo_projeto', 'descricao_projeto')
    display_link = ('id', 'titulo_projeto')
    



admin.site.register(Projects, ProjectsAdmin)