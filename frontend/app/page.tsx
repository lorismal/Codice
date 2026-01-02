'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState<string>('Connessione in corso...');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/health/')
      .then(response => {
        setMessage(response.data.status);
      })
      .catch(error => {
        console.error(error);
        setMessage('Errore connessione: Il Cervello non risponde');
      });
  }, []);

  return (
    <div className="flex bg-gray-900 min-h-screen items-center justify-center text-white">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
        <h1 className="text-2xl font-bold mb-4">Piattaforma Revenue Sharing</h1>
        <p className="text-emerald-400 font-mono text-lg">{message}</p>
      </div>
    </div>
  );
}
