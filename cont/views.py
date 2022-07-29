from pyexpat import model
from django.shortcuts import render
from django.views.generic import View
from .models import Projects


class Main(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')

    def post(self, request, *args, **kwargs):
        
        return render(request, 'index.html')
