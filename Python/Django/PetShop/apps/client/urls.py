from apps.client.views import view
from django.conf.urls import url

urlpatterns = [
    url( r'^$', view ),
]
