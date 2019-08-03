from django.conf.urls import url
from apps.pet.views import view

urlpatterns = [
    url( r'^$', view ),
]
