'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import CompanyCard from '@/components/CompanyCard';
import { Search, Filter, SlidersHorizontal, AlertCircle } from 'lucide-react';

interface Company {
    id: number;
    name: string;
    sector: string;
    short_description: string;
    affinity_score: number;
    revenue_percent: string;
    funding_target: string;
}

export default function InvestorPage() {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Filters state
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSector, setSelectedSector] = useState('all');

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/companies/');
                setCompanies(response.data);
            } catch (err) {
                console.error('Error fetching companies:', err);
                setError('Impossibile caricare le opportunità di investimento. Verifica la connessione col server.');
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    // Filter Logic
    const filteredCompanies = companies.filter(company => {
        const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.short_description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSector = selectedSector === 'all' || company.sector === selectedSector;

        return matchesSearch && matchesSector;
    });

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <header className="mb-8 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">Marketplace</h1>
                <p className="mt-2 text-lg text-gray-600">
                    Sfoglia le migliori opportunità di investimento selezionate per te.
                </p>
            </header>

            {/* ERROR STATE */}
            {error && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700">
                    <AlertCircle className="mr-2 h-5 w-5" />
                    {error}
                </div>
            )}

            {/* FILTER BAR */}
            <div className="mb-8 p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4">

                {/* Search */}
                <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Cerca azienda..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Sector Filter */}
                <div className="md:w-64">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Filter className="h-4 w-4 text-gray-400" />
                        </div>
                        <select
                            className="block w-full pl-10 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg"
                            value={selectedSector}
                            onChange={(e) => setSelectedSector(e.target.value)}
                        >
                            <option value="all">Tutti i Settori</option>
                            <option value="tech">Tech & SaaS</option>
                            <option value="green">Green & Energy</option>
                            <option value="med">MedTech</option>
                            <option value="food">Food</option>
                            <option value="fintech">Fintech</option>
                            <option value="ai">AI</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* LOADING STATE */}
            {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-64 bg-gray-200 rounded-xl"></div>
                    ))}
                </div>
            )}

            {/* GRID */}
            {!loading && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCompanies.map(company => (
                            <CompanyCard key={company.id} company={company} />
                        ))}
                    </div>

                    {filteredCompanies.length === 0 && !error && (
                        <div className="text-center py-12">
                            <p className="text-gray-500">Nessuna azienda trovata con questi criteri.</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
