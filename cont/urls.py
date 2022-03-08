from django import views
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='index'),
    path('port/projects', views.ProjectView.as_view(), name='projects'),
    path('port/about-me', views.about, name='about'),
    path('port/hardskills', views.hardskills, name='hardskills')
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)