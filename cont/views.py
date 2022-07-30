from django.shortcuts import render, redirect
from django.views.generic import View
from django.contrib.messages import success
from .models import Contacts, Likes
from .utils import ip

class Main(View):

    def get(self, request, *args, **kwargs):
        cont = len(Likes.objects.all())
        liberado = True
        for ip_pub in Likes.objects.all():
            if str(ip_pub) == ip():
                liberado = False

        return render(request, 'index.html', context={'likes': cont, 'acesso': liberado})

    def post(self, request, *args, **kwargs):
        try:
            nome = request.POST['nome']
            email = request.POST['email']
            subject = request.POST['subject']
            mensagem = request.POST['mensagem']
            success(request, 'Message to Ryan Barbosa Silva, sent successfully!')
            data = Contacts(nome=nome, email=email, subject=subject, mensagem=mensagem)
            data.save()
        except:
            liberado = True
            for ip_pub in Likes.objects.all():
                if str(ip_pub) == ip():
                    liberado = False
            if liberado:   
                add_like = Likes(ip=ip())
                add_like.save()
            cont = len(Likes.objects.all())

        return render(request, 'index.html',context={'likes': cont})
