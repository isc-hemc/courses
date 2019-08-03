from django.db import models

# Create your models here.
class Client( models.Model ):
    name = models.CharField( max_length = 30 )
    age = models.CharField( max_length = 2 )
    password = models.CharField( max_length = 16, null = False, blank = True )


class Email( models.Model ):
    id_client = models.ForeignKey( Client, on_delete = models.CASCADE )
    email = models.EmailField( max_length = 70, blank = True, null = True, unique = True )


class Phone( models.Model ):
    id_client = models.ForeignKey( Client, on_delete = models.CASCADE )
    phone = models.CharField( max_length = 70, blank = True, null = True, unique = True )
