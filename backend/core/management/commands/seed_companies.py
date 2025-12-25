from django.core.management.base import BaseCommand
from core.models import Company, CompanyUpdate
from django.utils import timezone
import random
from datetime import timedelta

class Command(BaseCommand):
    help = 'Seeds the database with companies from the static HTML'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding data...')

        companies_data = [
            {
                "name": "SolarWave Energy",
                "sector": "green",
                "short_description": "Pannelli solari flessibili di nuova generazione per l'edilizia urbana.",
                "full_description": "SolarWave Energy rivoluziona il settore fotovoltaico con pannelli adattabili a qualsiasi superficie...",
                "affinity_score": 95,
                "revenue_percent": 7.0,
                "funding_target": 75000.00,
                "city": "Bologna",
                "vat_number": "IT1122334455",
                "foundation_date": "2024-01-15"
            },
            {
                "name": "BioMed Tech",
                "sector": "med",
                "short_description": "Dispositivi indossabili per il monitoraggio remoto dei pazienti anziani.",
                "full_description": "Tecnologia avanzata per la telemedicina, focalizzata sul benessere della terza età...",
                "affinity_score": 89,
                "revenue_percent": 5.5,
                "funding_target": 120000.00,
                "city": "Torino",
                "vat_number": "IT5566778899",
                "foundation_date": "2023-08-10"
            },
            {
                "name": "Gusto & Tradizione",
                "sector": "food",
                "short_description": "Esportazione di prodotti tipici siciliani. Rete di piccoli produttori bio.",
                "full_description": "Portiamo i sapori autentici della Sicilia nel mondo, supportando i piccoli agricoltori locali...",
                "affinity_score": 75,
                "revenue_percent": 8.2,
                "funding_target": 45000.00,
                "city": "Palermo",
                "vat_number": "IT9988776655",
                "foundation_date": "2021-02-14"
            },
            {
                "name": "Urban Style",
                "sector": "fashion",
                "short_description": "Brand di streetwear sostenibile realizzato con materiali riciclati.",
                "full_description": "Moda etica e sostenibile per la generazione Z, utilizzando solo tessuti rigenerati...",
                "affinity_score": 60,
                "revenue_percent": 4.5,
                "funding_target": 30000.00,
                "city": "Milano",
                "vat_number": "IT4455667788",
                "foundation_date": "2022-11-01"
            },
            {
                "name": "CyberShield",
                "sector": "tech",
                "short_description": "Soluzioni di cybersecurity per PMI. Protezione dati e gdpr compliance.",
                "full_description": "CyberShield offre una suite completa per proteggere le piccole imprese dagli attacchi informatici...",
                "affinity_score": 90,
                "revenue_percent": 6.0,
                "funding_target": 200000.00,
                "city": "Roma",
                "vat_number": "IT1231231234",
                "foundation_date": "2020-03-15"
            },
            {
                "name": "Logistica Rapida",
                "sector": "servizi",
                "short_description": "Flotta di veicoli elettrici per consegne ultimo miglio nei centri storici.",
                "full_description": "Logistica verde e veloce per le aree metropolitane, riducendo le emissioni e i tempi di consegna...",
                "affinity_score": 70,
                "revenue_percent": 5.0,
                "funding_target": 90000.00,
                "city": "Firenze",
                "vat_number": "IT999888777",
                "foundation_date": "2023-01-20"
            },
            {
                "name": "NeuroBotics",
                "sector": "ai",
                "short_description": "Assistenti robotici autonomi per la cura degli anziani e disabili.",
                "full_description": "Robotica avanzata con AI per migliorare la qualità della vita delle persone fragili...",
                "affinity_score": 92,
                "revenue_percent": 9.5,
                "funding_target": 150000.00,
                "city": "Pisa",
                "vat_number": "IT111222333",
                "foundation_date": "2024-05-20"
            },
            {
                "name": "AgriDrone Italia",
                "sector": "agri",
                "short_description": "Monitoraggio delle colture tramite droni e sensori IoT avanzati.",
                "full_description": "Agricoltura di precisione per massimizzare la resa e ridurre l'uso di pesticidi...",
                "affinity_score": 85,
                "revenue_percent": 6.8,
                "funding_target": 80000.00,
                "city": "Bari",
                "vat_number": "IT444555666",
                "foundation_date": "2023-02-10"
            },
            {
                "name": "PayEasy",
                "sector": "fintech",
                "short_description": "Gateway di pagamento semplificato per piccoli e-commerce italiani.",
                "full_description": "Pagamenti digitali facili e sicuri, integrabili in pochi click per qualsiasi shop online...",
                "affinity_score": 78,
                "revenue_percent": 8.5,
                "funding_target": 250000.00,
                "city": "Milano",
                "vat_number": "IT777888999",
                "foundation_date": "2022-11-15"
            },
            {
                "name": "Pasta Fresca Express",
                "sector": "food",
                "short_description": "Catena di delivery di pasta fresca fatta a mano in 30 minuti.",
                "full_description": "La tradizione della pasta fresca consegnata a casa tua in tempi record...",
                "affinity_score": 82,
                "revenue_percent": 9.0,
                "funding_target": 60000.00,
                "city": "Napoli",
                "vat_number": "IT000111222",
                "foundation_date": "2023-06-01"
            },
            {
                "name": "EdTech Kids",
                "sector": "tech",
                "short_description": "Piattaforma educativa gamificata per l'apprendimento delle lingue.",
                "full_description": "Imparare giocando: la nostra app rende lo studio delle lingue divertente e coinvolgente...",
                "affinity_score": 65,
                "revenue_percent": 4.2,
                "funding_target": 40000.00,
                "city": "Torino",
                "vat_number": "IT333222111",
                "foundation_date": "2021-09-09"
            },
            {
                "name": "LegalTech Solutions",
                "sector": "servizi",
                "short_description": "Automazione contrattuale per liberi professionisti tramite blockchain.",
                "full_description": "Smart contracts sicuri e legali per proteggere il lavoro dei freelancer...",
                "affinity_score": 88,
                "revenue_percent": 6.5,
                "funding_target": 100000.00, # Estimated
                "city": "Milano",
                "vat_number": "IT000000001",
                "foundation_date": "2024-01-01"
            }
        ]

        for company_data in companies_data:
            company, created = Company.objects.update_or_create(
                name=company_data['name'],
                defaults=company_data
            )
            action = "Created" if created else "Updated"
            self.stdout.write(self.style.SUCCESS(f'{action} {company.name}'))

            # Create dummy news
            if created or not company.updates.exists():
                CompanyUpdate.objects.create(
                    company=company,
                    title=f"Nuovo traguardo raggiunto da {company.name}!",
                    content=f"Siamo felici di annunciare che {company.name} ha superato le aspettative di crescita per questo trimestre.",
                    published_at=timezone.now() - timedelta(days=random.randint(1, 30))
                )
                CompanyUpdate.objects.create(
                    company=company,
                    title="Apertura nuovo round di investimenti",
                    content="A grande richiesta riapriamo la possibilità di investire nel nostro progetto.",
                    published_at=timezone.now() - timedelta(days=random.randint(31, 60))
                )

        self.stdout.write(self.style.SUCCESS('Successfully seeded companies'))
