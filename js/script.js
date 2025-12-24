document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-link');
    const views = document.querySelectorAll('.view-content');

    // --- LOGICA MARKETPLACE (Filtri e Ordinamento) ---

    window.filterCompanies = () => {
        const selectedCategory = document.getElementById('category-filter').value;
        const searchQuery = document.getElementById('search-input').value.toLowerCase();
        const companyCards = document.querySelectorAll('.company-card');

        companyCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardName = card.querySelector('h2').innerText.toLowerCase();
            const cardDesc = card.querySelector('p').innerText.toLowerCase();

            const matchesCategory = selectedCategory === 'all' || cardCategory === selectedCategory;
            const matchesSearch = cardName.includes(searchQuery) || cardDesc.includes(searchQuery);

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    };

    window.sortCompanies = (criteria) => {
        const grid = document.getElementById('companies-grid');
        const cards = Array.from(document.querySelectorAll('.company-card'));
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
        });
        document.getElementById(`btn-sort-${criteria}`).classList.remove('bg-gray-200', 'text-gray-700');
        document.getElementById(`btn-sort-${criteria}`).classList.add('bg-blue-600', 'text-white');
        cards.sort((a, b) => {
            const valA = parseFloat(a.getAttribute(`data-${criteria}`));
            const valB = parseFloat(b.getAttribute(`data-${criteria}`));
            return valB - valA;
        });
        cards.forEach(card => grid.appendChild(card));
    };

    // Gestione Navigazione
    window.showView = (viewId) => {
        window.scrollTo(0, 0);
        views.forEach(v => v.classList.add('hidden'));
        document.getElementById(viewId).classList.remove('hidden');

        // Aggiorna lo stato attivo solo per i link principali
        navButtons.forEach(btn => btn.classList.remove('active'));
        if (viewId === 'home-view') document.getElementById('nav-home')?.classList.add('active');
        if (viewId === 'investi-view') document.getElementById('nav-investi')?.classList.add('active');
        if (viewId === 'investitore-view') document.getElementById('nav-portfolio')?.classList.add('active');
    };

    // Popup Logic
    window.openPopup = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'flex';
            setTimeout(() => el.classList.add('flex'), 10);
        }
    };

    window.closePopup = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove('flex');
            setTimeout(() => el.style.display = 'none', 300);
        }
    };

    window.openLiquidationPopup = (name, amount, profit, multiplier) => {
        // Note: Arguments were inferred from usage in HTML (though mostly unused in the original alert/function body, 
        // except name). Kept generic logic or updated to actually use them if needed. 
        // Original code just updated text.
        const textEl = document.getElementById('liquid-text');
        if (textEl) textEl.innerText = `Liquidazione contratto per ${name}.`;
        openPopup('liquidation-popup');
    }

    window.openCompanyDetails = (name, vat, date, city, target, status) => {
        const titleEl = document.getElementById('detail-title');
        const contentEl = document.getElementById('detail-content');

        if (titleEl) titleEl.innerText = name;
        if (contentEl) {
            contentEl.innerHTML = `
                <div class="space-y-2">
                    <p><strong>P.IVA:</strong> ${vat}</p>
                    <p><strong>Data:</strong> ${date}</p>
                    <p><strong>Città:</strong> ${city}</p>
                    <p><strong>Target:</strong> ${target}</p>
                    <p><strong>Stato:</strong> <span class="text-green-600 font-bold">${status}</span></p>
                </div>
             `;
        }
        openPopup('company-details-popup');
    }

    // Animation Count Up
    if (document.querySelector('.count-up')) {
        document.querySelectorAll('.count-up').forEach(el => {
            // For better UX, we could use a real intersection observer here, 
            // but for now we keep the original logic which just sets the text.
            el.innerText = el.getAttribute('data-value');
        });
    }

    // Default View
    showView('home-view');
});
