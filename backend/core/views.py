from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Company, CompanyUpdate
from .serializers import CompanySerializer, CompanyUpdateSerializer

def health_check(request):
    return JsonResponse({"status": "Il Cervello è online"})

class CompanyViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows companies to be viewed or edited.
    ReadOnly for now as the user is an investor.
    """
    queryset = Company.objects.all().order_by('-affinity_score')
    serializer_class = CompanySerializer

@api_view(['GET'])
def platform_stats(request):
    """
    Returns aggregate statistics for the landing page.
    """
    total_companies = Company.objects.count()
    # Mock data for now for values not in DB like total investment
    stats = {
        "investors": 1250, # Static or from User model later
        "companies": total_companies,
        "invested": 8450000,
        "distributed": 1230000
    }
    return Response(stats)
