from django.db import models

class ArtworkType(models.Model):
    art_type = models.CharField(max_length=50)

    def __str__(self):
        return self.art_type

class Artwork(models.Model):
    class ArtType(models.TextChoices):
        INSTALLATION = 'I'
        SCULPTURE = 'S'
        FOUND_PHOTOGRAPHY = 'FP'

    name = models.CharField(max_length=200)
    size = models.CharField(max_length=200)
    pub_date = models.DateField()
    description = models.TextField()
    art_type = models.ForeignKey(ArtworkType, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name} ({self.pub_date})'


class ArtworkImage(models.Model):
    artwork = models.ForeignKey(Artwork, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return f'Image ({self.artwork.name}) at {str(self.image)}'

