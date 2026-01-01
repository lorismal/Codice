# Guida Operativa Dettagliata: Dalla Teoria al Codice

Questa guida suddivide il setup del progetto in "Micro-Task" sequenziali.
Per ridurre al minimo gli errori, **copia e incolla i Prompt sottostanti nella nostra chat** (o in una nuova sessione se preferisci) uno alla volta.

---

## 🛠️ Fase 1: Setup "Il Cervello" (Backend Django)
*Stato attuale*: La cartella `backend` esiste ma manca file di configurazione (`manage.py`).

### Step 1.1: Inizializzazione Ambiente e Progetto
**Obiettivo**: Creare l'ambiente virtuale, installare Django e generare la struttura base.

> **📋 Prompt da Copiare (1/4)**
> ```text
> Agisci come esperto Python/Django.
> Procediamo con il setup del Backend nella cartella `backend`:
> 1. Posizionati nella directory `backend`.
> 2. Crea un ambiente virtuale python chiamato `venv`.
> 3. Crea un file `requirements.txt` contenente:
>    - django
>    - djangorestframework
>    - django-cors-headers
> 4. Usa il pip del `venv` per installare queste dipendenze.
> 5. Inizializza un nuovo progetto Django chiamato `config` nella directory corrente (comando: `django-admin startproject config .`).
> 6. Verifica che il file `manage.py` sia stato creato correttamente.
> ```

### Step 1.2: Configurazione App Core & Database
**Obiettivo**: Integrare l'app `core` esistente e preparare il database.

> **📋 Prompt da Copiare (2/4)**
> ```text
> Ora configuriamo il progetto Django appena creato:
> 1. Modifica `config/settings.py`:
>    - Aggiungi `rest_framework`, `corsheaders` e `core` alla lista `INSTALLED_APPS`.
>    - Aggiungi `corsheaders.middleware.CorsMiddleware` in cima a `MIDDLEWARE`.
>    - Imposta `CORS_ALLOW_ALL_ORIGINS = True` (per ora, per facilitare lo sviluppo).
> 2. Controlla `core/models.py`: assicurati che non ci siano errori di sintassi. Se ci sono modelli bozza, commentali per ora.
> 3. Esegui le migrazioni iniziali del database (`python manage.py migrate`).
> 4. Crea un superuser amministratore (se riesci in modo non interattivo, altrimenti spiegami come farlo).
> ```

---

## 🎨 Fase 2: Setup "La Vetrina" (Frontend Next.js)
*Stato attuale*: Cartella `frontend` vuota.

### Step 2.1: Creazione App Next.js
**Obiettivo**: Scaricare e installare il framework React.

> **📋 Prompt da Copiare (3/4)**
> ```text
> Agisci come esperto Frontend/React.
> Passiamo al setup del Frontend:
> 1. Posizionati nella directory `frontend`.
> 2. Inizializza una nuova app Next.js usando `npx create-next-app@latest .` con questi flag per evitare domande:
>    --typescript
>    --tailwind
>    --eslint
>    --no-src-dir
>    --import-alias "@/*"
>    --app
> 3. Installa anche `lucide-react` (per le icone) e `axios` (per le chiamate API).
> 4. Pulisci la pagina home: modifica `app/page.tsx` lasciando solo un `<div>` con scritto "Piattaforma Revenue Sharing - Frontend Attivo".
> 5. Verifica che `package.json` sia corretto.
> ```

---

## 🔌 Fase 3: Il Primo Battito (Connessione)
*Obiettivo*: Verificare che Frontend e Backend si parlino.

### Step 3.1: Hello World Full Stack
**Obiettivo**: Creare un API endpoint e chiamarlo dal frontend.

> **📋 Prompt da Copiare (4/4)**
> ```text
> Ora colleghiamo i due mondi:
> 
> LATO BACKEND:
> 1. In `core/views.py`, crea una funzione `health_check` che restituisce `JsonResponse({"status": "Il Cervello è online"})`.
> 2. Collega questa view all'URL `api/health/` in `config/urls.py` (ricorda gli import).
> 
> LATO FRONTEND:
> 1. Modifica `app/page.tsx`. Usa `useEffect` e `axios` per chiamare `http://127.0.0.1:8000/api/health/`.
> 2. Mostra a schermo il messaggio ricevuto dal backend o "Errore connessione" se fallisce.
> 3. Aggiungi un piccolo stile Tailwind per renderlo presentabile.
> ```

---
**Consiglio**: Dopo aver completato questi 4 prompt, avrai un sistema "End-to-End" funzionante. Da lì potremo iniziare a costruire le vere feature (Login, Upload Documenti, ecc.).
