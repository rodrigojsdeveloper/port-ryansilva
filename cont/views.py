from pyexpat import model
from django.shortcuts import render
from django.views.generic.list import ListView
from .models import Projects


def index(request):
    return render(request, 'index.html')
