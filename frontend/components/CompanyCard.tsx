import Link from 'next/link';
import { ArrowRight, TrendingUp, BarChart3 } from 'lucide-react';

interface CompanyProps {
    company: {
        id: number;
        name: string;
        sector: string;
        short_description: string;
        affinity_score: number;
        revenue_percent: string; // Decimal comes as string from JSON often
        funding_target: string;
    };
}

const SECTOR_COLORS: Record<string, string> = {
    tech: 'bg-blue-100 text-blue-800',
    green: 'bg-yellow-100 text-yellow-800',
    food: 'bg-green-100 text-green-800',
    med: 'bg-indigo-100 text-indigo-800',
    fashion: 'bg-pink-100 text-pink-800',
    servizi: 'bg-gray-100 text-gray-800',
    ai: 'bg-purple-100 text-purple-800',
    agri: 'bg-teal-100 text-teal-800',
    fintech: 'bg-orange-100 text-orange-800',
};

const SECTOR_LABELS: Record<string, string> = {
    tech: 'Tech & SaaS',
    green: 'Green & Energy',
    food: 'Food & Beverage',
    med: 'MedTech & Salute',
    fashion: 'Fashion & Retail',
    servizi: 'Servizi & Logistica',
    ai: 'AI & Robotics',
    agri: 'AgriTech',
    fintech: 'Fintech',
};


export default function CompanyCard({ company }: CompanyProps) {
    const badgeColor = SECTOR_COLORS[company.sector] || 'bg-gray-100 text-gray-800';
    const sectorLabel = SECTOR_LABELS[company.sector] || company.sector;

    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all hover:shadow-xl border border-gray-100 transform hover:-translate-y-1 flex flex-col justify-between h-full">
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold text-gray-900 truncate">{company.name}</h2>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${badgeColor}`}>
                        {sectorLabel}
                    </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {company.short_description}
                </p>

                <div className="grid grid-cols-2 gap-2 text-sm text-center">
                    <div className="bg-gray-50 p-2 rounded">
                        <span className="block text-gray-500 text-xs flex items-center justify-center gap-1">
                            <BarChart3 size={12} /> Affinità
                        </span>
                        <span className="font-bold text-blue-600 text-lg">{company.affinity_score}/100</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                        <span className="block text-gray-500 text-xs flex items-center justify-center gap-1">
                            <TrendingUp size={12} /> Ricavi
                        </span>
                        <span className="font-bold text-green-600 text-lg">{company.revenue_percent}%</span>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">
                    Target: € {parseFloat(company.funding_target).toLocaleString('it-IT')}
                </span>
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                    Dettagli <ArrowRight className="ml-1 h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
