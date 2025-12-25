from django.contrib import admin
from .models import Company, CompanyUpdate

class CompanyUpdateInline(admin.TabularInline):
    model = CompanyUpdate
    extra = 1

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'sector', 'revenue_percent', 'funding_target', 'affinity_score', 'city')
    list_filter = ('sector', 'city')
    search_fields = ('name', 'vat_number', 'city')
    prepopulated_fields = {'slug': ('name',)}
    inlines = [CompanyUpdateInline]

@admin.register(CompanyUpdate)
class CompanyUpdateAdmin(admin.ModelAdmin):
    list_display = ('title', 'company', 'published_at')
    list_filter = ('company', 'published_at')
    search_fields = ('title', 'content')
