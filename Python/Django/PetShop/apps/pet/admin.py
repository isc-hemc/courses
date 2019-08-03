from apps.pet.models import Pet, Adopt, Sale, Vaccine
from django.contrib import admin

# Register your models here.
admin.site.register( Pet )
admin.site.register( Adopt )
admin.site.register( Sale )
admin.site.register( Vaccine )
