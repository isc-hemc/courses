from apps.client.models import Client
from django.db import models

# Create your models here.
class Pet( models.Model ):
    name = models.CharField( max_length = 20 )
    age = models.CharField( max_length = 2 )
    animal = models.CharField( max_length = 10 )
    breed = models.CharField( max_length = 20 )
    client = models.ForeignKey( Client, blank = True, null = True, on_delete = models.CASCADE )


class Adopt( models.Model ):
    id_pet = models.ForeignKey( Pet, on_delete = models.CASCADE )


class Sale( models.Model ):
    id_pet = models.ForeignKey( Pet, on_delete = models.CASCADE )
    price = models.IntegerField()


class Vaccine( models.Model ):
    pet = models.ManyToManyField( Pet )
    name = models.CharField( max_length = 20 )
    next_schedule = models.DateField()
    last_schedule = models.DateField()
