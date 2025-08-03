import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
        } | null;
    };
    [key: string]: unknown;
}

export default function Welcome({ auth }: Props) {
    return (
        <>
            <Head title="Sistem Distribusi Barang UMKM" />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Header */}
                <header className="px-6 py-4">
                    <nav className="flex items-center justify-between max-w-7xl mx-auto">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">📦</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">DistribuBiz</span>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            {auth.user ? (
                                <Link href="/dashboard">
                                    <Button>Dashboard</Button>
                                </Link>
                            ) : (
                                <div className="flex items-center space-x-3">
                                    <Link href="/login">
                                        <Button variant="outline">Masuk</Button>
                                    </Link>
                                    <Link href="/register">
                                        <Button>Daftar</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>
                </header>

                {/* Hero Section */}
                <main className="px-6 py-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl font-bold text-gray-900 mb-6">
                                📦 Sistem Distribusi Barang
                                <span className="block text-blue-600 mt-2">untuk UMKM</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Kelola inventori, catat barang masuk-keluar, dan pantau stok dengan mudah. 
                                Solusi lengkap untuk bisnis distribusi Anda dengan fitur pembayaran COD & kredit.
                            </p>
                            
                            {!auth.user && (
                                <div className="flex justify-center space-x-4">
                                    <Link href="/register">
                                        <Button size="lg" className="px-8">
                                            🚀 Mulai Gratis
                                        </Button>
                                    </Link>
                                    <Link href="/login">
                                        <Button size="lg" variant="outline" className="px-8">
                                            Masuk
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <Card className="border-2 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-2xl">📥</span>
                                    </div>
                                    <CardTitle className="text-xl">Barang Masuk</CardTitle>
                                    <CardDescription>
                                        Catat pembelian dari supplier dengan mudah
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                            Invoice supplier otomatis
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                            Support COD & kredit
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                            Tracking pembayaran hutang
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-2 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-2xl">📤</span>
                                    </div>
                                    <CardTitle className="text-xl">Barang Keluar</CardTitle>
                                    <CardDescription>
                                        Buat faktur penjualan ke outlet dengan fleksibel
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                            Faktur penjualan otomatis
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                            COD & kredit (7/14/30 hari)
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                                            Monitoring piutang
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-2 hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-2xl">📊</span>
                                    </div>
                                    <CardTitle className="text-xl">Laporan Stok</CardTitle>
                                    <CardDescription>
                                        Pantau pergerakan barang secara real-time
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                                            Kartu stok lengkap
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                                            Histori masuk & keluar
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                                            Alert stok minimum
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Benefits Section */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
                            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                                💼 Mengapa Pilih DistribuBiz?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">✅</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Mudah Digunakan</h3>
                                            <p className="text-gray-600">Interface sederhana yang dapat dipahami siapa saja</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">🔒</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Data Aman</h3>
                                            <p className="text-gray-600">Keamanan data terjamin dengan enkripsi modern</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">⚡</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Performa Cepat</h3>
                                            <p className="text-gray-600">Loading cepat dan responsif di semua perangkat</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <span className="text-2xl">📱</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Mobile Friendly</h3>
                                            <p className="text-gray-600">Akses dari HP, tablet, atau komputer dengan mudah</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Section */}
                        {!auth.user && (
                            <div className="text-center">
                                <div className="bg-blue-600 rounded-2xl p-8 text-white">
                                    <h2 className="text-3xl font-bold mb-4">
                                        🎯 Siap Meningkatkan Bisnis Anda?
                                    </h2>
                                    <p className="text-xl mb-6 opacity-90">
                                        Bergabunglah dengan ribuan UMKM yang sudah menggunakan DistribuBiz
                                    </p>
                                    <Link href="/register">
                                        <Button size="lg" variant="secondary" className="px-12">
                                            Daftar Sekarang - GRATIS!
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </main>

                {/* Footer */}
                <footer className="px-6 py-8 border-t bg-white">
                    <div className="max-w-7xl mx-auto text-center text-gray-600">
                        <p>&copy; 2024 DistribuBiz. Solusi distribusi terpercaya untuk UMKM Indonesia.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}