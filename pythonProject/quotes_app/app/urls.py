from django.urls import path
from .views import quote #quote est la fct

urlpatterns = [
    path('quote/', quote, name='quote'),  # Add the 'quote' endpoint
]