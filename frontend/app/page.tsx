'use client';

import Link from 'next/link';
import { ArrowRight, BarChart, Rocket, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [stats, setStats] = useState({ companies: 0, invested: 0, distributed: 0 });

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/stats/')
      .then(res => setStats(res.data))
      .catch(err => console.error("Stats API offline", err));
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Il futuro del</span>{' '}
                  <span className="block text-blue-600 xl:inline">Revenue Sharing</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  La piattaforma che connette investitori retail con le PMI italiane più promettenti.
                  Trasparenza, tecnologia e rendimenti reali.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/investor" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Marketplace Investitori <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/company-dashboard" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                      Area Aziende
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 flex items-center justify-center">
          <div className="text-9xl opacity-10 select-none">🚀</div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-800 rounded-xl">
              <div className="text-4xl font-bold text-blue-400 mb-2">{stats.companies || '-'}</div>
              <div className="text-gray-400 uppercase text-sm tracking-wider">Aziende Attive</div>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl">
              <div className="text-4xl font-bold text-green-400 mb-2">€ {(stats.invested / 1000000).toFixed(1)}M+</div>
              <div className="text-gray-400 uppercase text-sm tracking-wider">Capitale Raccolto</div>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl">
              <div className="text-4xl font-bold text-purple-400 mb-2">{stats.distributed > 0 ? `€ ${(stats.distributed / 1000).toFixed(0)}k` : '-'}</div>
              <div className="text-gray-400 uppercase text-sm tracking-wider">Dividendi Distribuiti</div>
            </div>
          </div>
        </div>
      </div>

      {/* I Nostri Valori */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">I Nostri Valori</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Cosa ci guida
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Trasparenza</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Ogni operazione è tracciabile. Dashboard in tempo reale, report dettagliati e comunicazione chiara con tutti gli stakeholder.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <Rocket className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Semplicità</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Investire non deve essere complicato. Processi snelli, interfacce intuitive e supporto dedicato per ogni passaggio.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                    <BarChart className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Progresso</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Crediamo nella crescita condivisa. Finanziamo le PMI italiane per costruire insieme un futuro economico più forte.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
