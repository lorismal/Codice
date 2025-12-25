from django.db import models
from django.utils.text import slugify

class Company(models.Model):
    SECTOR_CHOICES = [
        ('tech', 'Tech & SaaS'),
        ('green', 'Green & Energy'),
        ('food', 'Food & Beverage'),
        ('med', 'MedTech & Salute'),
        ('fashion', 'Fashion & Retail'),
        ('servizi', 'Servizi & Logistica'),
        ('ai', 'AI & Robotics'),
        ('agri', 'AgriTech'),
        ('fintech', 'Fintech'), # Added to support PayEasy
    ]

    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    sector = models.CharField(max_length=20, choices=SECTOR_CHOICES)
    short_description = models.TextField(help_text="Testo breve per la card")
    full_description = models.TextField(help_text="Descrizione dettagliata per il popup/pagina")
    logo = models.ImageField(upload_to='companies/logos/', blank=True, null=True)
    
    # Financials & Stats
    affinity_score = models.IntegerField(default=0, help_text="Punteggio affinità (0-100)")
    revenue_percent = models.DecimalField(max_digits=5, decimal_places=2, help_text="Rendimento percentuale (es. 7.50)")
    funding_target = models.DecimalField(max_digits=12, decimal_places=2, help_text="Obiettivo raccolta (es. 75000.00)")
    
    # Anagraphics
    foundation_date = models.DateField(null=True, blank=True)
    vat_number = models.CharField(max_length=20, verbose_name="Partita IVA")
    city = models.CharField(max_length=100)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Companies"
        ordering = ['-affinity_score']

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    @property
    def progress_percent(self):
        # Esempio di calcolo fittizio (es. raccolto / target)
        # Per ora ritorniamo un valore random o statico se non c'è un campo 'collected'
        return 0 


class CompanyUpdate(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='updates')
    title = models.CharField(max_length=200)
    content = models.TextField()
    cover_image = models.ImageField(upload_to='companies/news/', blank=True, null=True)
    published_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-published_at']

    def __str__(self):
        return f"{self.company.name} - {self.title}"
