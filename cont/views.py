from django.shortcuts import render, redirect
from django.views.generic import View
from django.contrib.messages import success
from .models import Contacts


class Main(View):

    def get(self, request, *args, **kwargs):
        return render(request, 'index.html')

    def post(self, request, *args, **kwargs):
        nome = request.POST['nome']
        email = request.POST['email']
        subject = request.POST['subject']
        mensagem = request.POST['mensagem']
        success(request, 'Message to Ryan Barbosa Silva, sent successfully!')
        data = Contacts(nome=nome, email=email, subject=subject, mensagem=mensagem)
        data.save()

        return render(request, 'index.html')
