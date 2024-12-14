
from django.urls import path, include

urlpatterns = [
    path('api/', include('app.urls')),  # Prefix the app's routes
]