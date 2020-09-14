from django.contrib import admin
from .models import Artwork, ArtworkImage, ArtworkType

# Register your models here.
admin.site.register(ArtworkType)
admin.site.register(Artwork)
admin.site.register(ArtworkImage)
