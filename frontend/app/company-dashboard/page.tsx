'use client';

import { ArrowUpRight, Users, Euro, Wallet } from 'lucide-react';

export default function CompanyDashboard() {
    return (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="mb-8 border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-900">TechSoluzioni S.r.l.</h1>
                <p className="mt-1 text-gray-600">Dashboard Monitoraggio Campagna</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Main Stats Area */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Valutazione Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 text-gray-900">
                            <Euro size={120} />
                        </div>
                        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Valutazione Attuale</h2>
                        <p className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">€ 5.000.000</p>
                        <div className="mt-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <span className="w-2 h-2 mr-1 bg-green-400 rounded-full animate-pulse"></span>
                            Quotazione Live
                        </div>
                    </div>

                    {/* Investors Card */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 text-blue-900">
                            <Users size={120} />
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Investitori</h2>
                                <p className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">145</p>
                                <p className="mt-2 text-gray-600 font-medium">Lista d'attesa attiva</p>
                            </div>
                        </div>

                        {/* Simulated Progress */}
                        <div className="mt-8">
                            <div className="flex justify-between text-xs text-gray-500 mb-2">
                                <span>Min: € 200k</span>
                                <span>Max: € 1M</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-3">
                                <div className="bg-blue-600 h-3 rounded-full" style={{ width: '35%' }}></div>
                            </div>
                            <p className="text-xs text-blue-600 mt-2 font-bold text-right">35% Raggiunto</p>
                        </div>
                    </div>

                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-bold text-gray-900 text-lg mb-4">Anagrafica</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex justify-between py-2 border-b border-gray-50">
                                <span className="text-gray-500">P.IVA</span>
                                <span className="font-medium">12345678901</span>
                            </li>
                            <li className="flex justify-between py-2 border-b border-gray-50">
                                <span className="text-gray-500">Sede</span>
                                <span className="font-medium text-right">Milano (MI)</span>
                            </li>
                            <li className="flex justify-between py-2 border-b border-gray-50">
                                <span className="text-gray-500">Settore</span>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    Tech
                                </span>
                            </li>
                        </ul>
                        <button className="w-full mt-6 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-2 rounded-lg transition-colors border border-gray-200">
                            Modifica Dati
                        </button>
                    </div>

                    <div className="mt-6 bg-purple-50 rounded-xl p-6 border border-purple-100">
                        <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                            <Wallet className="h-4 w-4" /> Supporto
                        </h4>
                        <p className="text-sm text-purple-700 mb-4">
                            Hai bisogno di aggiornare la valutazione pre-money?
                        </p>
                        <a href="#" className="flex items-center text-sm font-bold text-purple-600 hover:text-purple-800">
                            Contatta Advisor <ArrowUpRight className="h-4 w-4 ml-1" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
