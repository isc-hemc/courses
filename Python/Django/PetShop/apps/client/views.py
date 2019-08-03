from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def view( request ):
    return render( request, "Client/login.html" )
