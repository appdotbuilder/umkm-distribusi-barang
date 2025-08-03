import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Barang Masuk',
        href: '/incoming-goods',
    },
];

export default function IncomingGoodsIndex() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Barang Masuk" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">📥 Barang Masuk</h1>
            <p className="text-gray-600 mt-1">Kelola pembelian dari supplier</p>
          </div>
          <Button>
            + Buat Invoice Baru
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                📋 Invoice Bulan Ini
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">0</div>
              <p className="text-sm text-muted-foreground">Transaksi pembelian</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                💳 Total Hutang
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">Rp 0</div>
              <p className="text-sm text-muted-foreground">Belum dibayar</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                ⏰ Jatuh Tempo Hari Ini
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">0</div>
              <p className="text-sm text-muted-foreground">Invoice kredit</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Fitur Barang Masuk</CardTitle>
            <CardDescription>
              Kelola pembelian dan invoice dari supplier
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">✨ Fitur Utama:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Pencatatan invoice supplier otomatis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Support pembayaran COD dan kredit</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Tracking pembayaran hutang supplier</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Update stok otomatis saat barang diterima</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">🔄 Alur Kerja:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                    <span>Buat invoice berdasarkan pembelian dari supplier</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                    <span>Pilih metode pembayaran (COD/Kredit)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                    <span>Konfirmasi penerimaan barang</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                    <span>Catat pembayaran/pelunasan hutang</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">🚧 Dalam Pengembangan</h4>
              <p className="text-blue-800">
                Fitur lengkap barang masuk sedang dalam tahap pengembangan. 
                Akan segera tersedia dengan semua fungionalitas manajemen invoice supplier.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}