document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-link');
    const views = document.querySelectorAll('.view-content');

    // --- LOGICA MARKETPLACE (Filtri e Ordinamento) ---

    window.filterCompanies = () => {
        const categoryFilter = document.getElementById('category-filter');
        const searchInput = document.getElementById('search-input');

        // Safety check: if elements don't exist (e.g. on Index page), stop.
        if (!categoryFilter || !searchInput) return;

        const selectedCategory = categoryFilter.value;
        const searchQuery = searchInput.value.toLowerCase();
        const companyCards = document.querySelectorAll('.company-card');

        companyCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const h2 = card.querySelector('h2');
            const p = card.querySelector('p');

            const cardName = h2 ? h2.innerText.toLowerCase() : '';
            const cardDesc = p ? p.innerText.toLowerCase() : '';

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
        // Safety check
        if (!grid) return;

        const cards = Array.from(document.querySelectorAll('.company-card'));

        // Update button styles
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
        });

        const activeBtn = document.getElementById(`btn-sort-${criteria}`);
        if (activeBtn) {
            activeBtn.classList.remove('bg-gray-200', 'text-gray-700');
            activeBtn.classList.add('bg-blue-600', 'text-white');
        }

        cards.sort((a, b) => {
            const valA = parseFloat(a.getAttribute(`data-${criteria}`)) || 0;
            const valB = parseFloat(b.getAttribute(`data-${criteria}`)) || 0;
            return valB - valA;
        });

        cards.forEach(card => grid.appendChild(card));
    };

    // Popup Logic
    window.openPopup = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'flex';
            setTimeout(() => el.classList.add('opacity-100'), 10);
        }
    };

    window.closePopup = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove('opacity-100');
            setTimeout(() => el.style.display = 'none', 300);
        }
    };

    window.openLiquidationPopup = (name, amount, profit, multiplier) => {
        const textEl = document.getElementById('liquid-text');
        const contentEl = document.querySelector('#liquidation-popup .popup-content');

        if (textEl && contentEl) {
            let profitClass = profit >= 0 ? 'text-green-600' : 'text-red-600';
            let profitSign = profit >= 0 ? '+' : '';

            contentEl.innerHTML = `
                <span class="close-button text-gray-400 hover:text-gray-600 float-right text-2xl cursor-pointer" onclick="closePopup('liquidation-popup')">&times;</span>
                <h2 class="text-xl font-bold mb-4 text-gray-900">Conferma Liquidazione</h2>
                <div class="mb-4">
                    <p class="text-gray-600 mb-2">Stai per liquidare la posizione in <strong>${name}</strong>.</p>
                    <div class="bg-gray-50 p-4 rounded-lg border border-gray-100 space-y-2 text-sm">
                        <div class="flex justify-between">
                            <span>Importo Iniziale:</span>
                            <span class="font-medium">€ ${amount.toLocaleString('it-IT', { minimumFractionDigits: 2 })}</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Profitto/Perdita:</span>
                            <span class="font-bold ${profitClass}">${profitSign}€ ${Math.abs(profit).toLocaleString('it-IT', { minimumFractionDigits: 2 })}</span>
                        </div>
                        <div class="flex justify-between border-t pt-2 mt-2">
                             <span>Moltiplicatore:</span>
                             <span class="font-bold text-gray-800">${multiplier}x</span>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-3">
                    <button class="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition" onclick="alert('Liquidazione confermata!'); closePopup('liquidation-popup')">Conferma Liquidazione</button>
                    <button class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium transition" onclick="closePopup('liquidation-popup')">Annulla</button>
                </div>
            `;
        }
        openPopup('liquidation-popup');
    };

    window.openCompanyDetails = (name, vat, date, city, target, status) => {
        const titleEl = document.getElementById('detail-title');
        const contentEl = document.getElementById('detail-content');

        if (titleEl) titleEl.innerText = name;
        if (contentEl) {
            contentEl.innerHTML = `
                <div class="space-y-3 text-sm">
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <p class="text-xs text-gray-500 uppercase tracking-wide">Partita IVA</p>
                            <p class="font-medium text-gray-900">${vat}</p>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500 uppercase tracking-wide">Data Fondazione</p>
                            <p class="font-medium text-gray-900">${date}</p>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500 uppercase tracking-wide">Sede Legale</p>
                            <p class="font-medium text-gray-900">${city}</p>
                        </div>
                         <div>
                            <p class="text-xs text-gray-500 uppercase tracking-wide">Target Raccolta</p>
                            <p class="font-medium text-blue-600">${target}</p>
                        </div>
                    </div>
                    <div class="pt-3 border-t border-gray-100">
                        <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">Stato Campagna</p>
                        <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">${status}</span>
                    </div>
                </div>
                <div class="mt-6">
                     <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium transition" onclick="closePopup('company-details-popup')">Chiudi</button>
                </div>
             `;
        }
        openPopup('company-details-popup');
    };

    // Animation Count Up
    if (document.querySelector('.count-up')) {
        document.querySelectorAll('.count-up').forEach(el => {
            el.innerText = el.getAttribute('data-value');
        });
    }
});
