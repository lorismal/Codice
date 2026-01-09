from django.core.management.base import BaseCommand
from core.models import Company
from datetime import date
from decimal import Decimal

class Command(BaseCommand):
    help = 'Seeds the database with legacy companies'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding companies...')

        companies = [
            {
                "name": "SolarWave Energy",
                "sector": "green",
                "affinity_score": 95,
                "revenue_percent": 7.00,
                "funding_target": 75000.00,
                "city": "Bologna (BO)",
                "short_description": "Pannelli solari flessibili di nuova generazione per l'edilizia urbana.",
                "full_description": "SolarWave sta rivoluzionando l'energia solare integrata negli edifici con i suoi pannelli flessibili brevettati.",
                "vat_number": "IT1122334455",
                "foundation_date": date(2022, 1, 1),
            },
            {
                "name": "BioMed Tech",
                "sector": "med",
                "affinity_score": 89,
                "revenue_percent": 5.50,
                "funding_target": 120000.00,
                "city": "Torino (TO)",
                "short_description": "Dispositivi indossabili per il monitoraggio remoto dei pazienti anziani.",
                "full_description": "Soluzioni avanzate per la telemedicina e il monitoraggio continuo dei parametri vitali.",
                "vat_number": "IT5566778899",
                "foundation_date": date(2021, 5, 10),
            },
            {
                "name": "Gusto & Tradizione",
                "sector": "food",
                "affinity_score": 75,
                "revenue_percent": 8.20,
                "funding_target": 45000.00,
                "city": "Palermo (PA)",
                "short_description": "Esportazione di prodotti tipici siciliani. Rete di piccoli produttori bio.",
                "full_description": "Portiamo i sapori autentici della Sicilia nel mondo, supportando i piccoli produttori locali.",
                "vat_number": "IT9988776655",
                "foundation_date": date(2020, 11, 20),
            },
            {
                "name": "Urban Style",
                "sector": "fashion",
                "affinity_score": 60,
                "revenue_percent": 4.50,
                "funding_target": 30000.00,
                "city": "Milano (MI)",
                "short_description": "Brand di streetwear sostenibile realizzato con materiali riciclati.",
                "full_description": "Moda etica e sostenibile per le nuove generazioni, senza compromessi sullo stile.",
                "vat_number": "IT4455667788",
                "foundation_date": date(2022, 11, 1),
            },
            {
                "name": "CyberShield",
                "sector": "tech",
                "affinity_score": 90,
                "revenue_percent": 6.00,
                "funding_target": 200000.00,
                "city": "Roma (RM)",
                "short_description": "Soluzioni di cybersecurity per PMI. Protezione dati e gdpr compliance.",
                "full_description": "Proteggiamo il business delle PMI dalle minacce informatiche con soluzioni accessibili e potenti.",
                "vat_number": "IT1231231234",
                "foundation_date": date(2020, 3, 15),
            },
            {
                "name": "Logistica Rapida",
                "sector": "servizi",
                "affinity_score": 70,
                "revenue_percent": 5.00,
                "funding_target": 90000.00,
                "city": "Firenze (FI)",
                "short_description": "Flotta di veicoli elettrici per consegne ultimo miglio nei centri storici.",
                "full_description": "Logistica sostenibile ed efficiente per le città del futuro.",
                "vat_number": "IT999888777",
                "foundation_date": date(2023, 1, 20),
            },
             {
                "name": "NeuroBotics",
                "sector": "ai",
                "affinity_score": 92,
                "revenue_percent": 9.50,
                "funding_target": 150000.00,
                "city": "Pisa (PI)",
                "short_description": "Assistenti robotici autonomi per la cura degli anziani e disabili.",
                "full_description": "AI avanzata al servizio delle persone fragili, per una migliore qualità della vita.",
                "vat_number": "IT111222333",
                "foundation_date": date(2024, 5, 20),
            },
            {
                "name": "AgriDrone Italia",
                "sector": "agri",
                "affinity_score": 85,
                "revenue_percent": 6.80,
                "funding_target": 80000.00,
                "city": "Bari (BA)",
                "short_description": "Monitoraggio delle colture tramite droni e sensori IoT avanzati.",
                "full_description": "Agricoltura di precisione per massimizzare le rese e ridurre gli sprechi.",
                "vat_number": "IT444555666",
                "foundation_date": date(2023, 2, 10),
            },
            {
                "name": "PayEasy",
                "sector": "fintech",
                "affinity_score": 78,
                "revenue_percent": 8.50,
                "funding_target": 250000.00,
                "city": "Milano (MI)",
                "short_description": "Gateway di pagamento semplificato per piccoli e-commerce italiani.",
                "full_description": "Pagamenti facili, veloci e sicuri per far crescere l'e-commerce italiano.",
                "vat_number": "IT777888999",
                "foundation_date": date(2022, 11, 15),
            },
        ]

        for company_data in companies:
            # Check if exists to avoid duplicates
            if not Company.objects.filter(vat_number=company_data['vat_number']).exists():
                Company.objects.create(**company_data)
                self.stdout.write(self.style.SUCCESS(f"Created {company_data['name']}"))
            else:
                 self.stdout.write(self.style.WARNING(f"Skipped {company_data['name']} (already exists)"))

        self.stdout.write(self.style.SUCCESS('Successfully seeded database'))
