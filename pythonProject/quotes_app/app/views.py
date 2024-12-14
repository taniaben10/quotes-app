import requests
from django.http import JsonResponse
from django.conf import settings

def quote(request):
    api_url = "https://api.api-ninjas.com/v1/quotes"
    api_key = settings.API_KEY  # Récupérer la clé API

    headers = {
        "X-Api-Key": api_key  # Utilisation correcte de la clé API
    }

    try:
        response = requests.get(api_url, headers=headers)
        response.raise_for_status()
        return JsonResponse(response.json(), safe=False)
    except requests.RequestException as e:
        return JsonResponse({"error": str(e)}, status=500)