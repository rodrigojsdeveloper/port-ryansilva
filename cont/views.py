from pyexpat import model
from django.shortcuts import render
from django.views.generic.list import ListView
from .models import Projects


def index(request):
    return render(request, 'index.html')


class ProjectView(ListView):
    model = Projects
    template_name = 'index_projects.html'
    paginate_by = 3
    context_object_name = 'projects'

def about(request):
    return render(request, 'index_about.html')


def hardskills(request):
    return render(request, 'index_hardskills.html')
