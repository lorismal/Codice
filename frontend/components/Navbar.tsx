'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer">
                        <span className="text-2xl font-bold text-blue-600">Lets<span className="text-gray-900">Grow!</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-900 px-3 py-2 text-sm font-medium hover:text-blue-600">
                            Home
                        </Link>
                        <Link href="/investor" className="text-gray-900 px-3 py-2 text-sm font-medium hover:text-blue-600">
                            Investi!
                        </Link>
                        <Link href="/company-dashboard" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                            Area Aziende
                        </Link>
                    </div>

                    {/* User / Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition cursor-pointer">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                                MR
                            </div>
                            <span>Mario Rossi</span>
                        </div>

                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-400 hover:text-gray-600">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            Home
                        </Link>
                        <Link href="/investor" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            Investi!
                        </Link>
                        <Link href="/company-dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                            Area Aziende
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
