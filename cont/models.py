from django.db import models


class Contacts(models.Model):
    nome = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    subject = models.CharField(max_length=255)
    mensagem = models.TextField()

    def __str__(self):
        return self.nome
