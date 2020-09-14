from django.views import generic
from .models import Artwork, ArtworkType

class ArtTypesMixin:
    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['art_types'] = ArtworkType.objects.all()
        return context

class IndexView(ArtTypesMixin, generic.TemplateView):
    template_name = 'index.html'

class ArtDetailView(ArtTypesMixin, generic.DetailView):
    model = Artwork
    template_name = 'artwork.html'


