from rest_framework import serializers
from .models import Company, CompanyUpdate

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = [
            'id', 'name', 'slug', 'sector', 'short_description', 'full_description', 
            'logo', 'affinity_score', 'revenue_percent', 'funding_target', 
            'city', 'foundation_date', 'progress_percent'
        ]

class CompanyUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyUpdate
        fields = '__all__'
