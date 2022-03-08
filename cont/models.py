from django.db import models


class Projects(models.Model):
    titulo_projeto = models.CharField(max_length=100)
    descricao_projeto = models.TextField()
    imagen_projeto = models.ImageField(upload_to='media/%Y/%m',null=None, blank=True)
    github_projeto = models.URLField()
    link_projeto = models.URLField(null=None,blank=True)

    def __str__(self):
        return self.titulo_projeto
