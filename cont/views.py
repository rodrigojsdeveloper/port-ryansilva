import datetime
import random
from django.shortcuts import render, redirect
from django.views.generic import View
from django.contrib.messages import success
# from django.http import HttpResponse
from .models import Contacts, Likes
from .utils import ip


class Main(View):

    def get(self, request, *args, **kwargs):
        cont = len(Likes.objects.all())
        ja_like = request.COOKIES.get('LIKE', None)
        mensagens_intro = [
            "I am a tireless explorer in search of new ideas and perspectives.",
            "I am an advocate for innovation and a lover of creativity in all its forms.",
            "I am an independent thinker and a curious lifelong learner, always seeking to learn something new.",
            "I am a technology enthusiast and a champion of smart and effective solutions.",
            "I am a persistent dreamer and a tireless achiever, always in search of new goals and challenges."
        ]
        print(cont, ja_like)
        return render(
            request, 'index.html',
            context={
                'likes': cont,
                'acesso': False if ja_like else True,
                'mensagem': random.choice(mensagens_intro)
            }
        )

    def post(self, request, *args, **kwargs):
        if request.POST.get("form_type") == 'contact':
            nome = request.POST['nome']
            email = request.POST['email']
            subject = request.POST['subject']
            mensagem = request.POST['mensagem']
            success(request, 'Message to Ryan Barbosa Silva, sent successfully!') # noqa
            data = Contacts(
                nome=nome, email=email, subject=subject, mensagem=mensagem
            )
            data.save()
            response = redirect('/#contact')
            return response

        elif request.POST.get("form_type") == 'like':
            add_like = Likes(ip=ip())
            add_like.save()
            expires = datetime.datetime.now() + datetime.timedelta(days=365*10)
            response = redirect('/')
            response.set_cookie(
                "LIKE", "TRUE", expires=expires
            )
            return response

