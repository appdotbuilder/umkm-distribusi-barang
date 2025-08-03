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
        title: 'Barang Keluar',
        href: '/outgoing-goods',
    },
];

export default function OutgoingGoodsIndex() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Barang Keluar" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">📤 Barang Keluar</h1>
            <p className="text-gray-600 mt-1">Kelola penjualan ke outlet</p>
          </div>
          <Button>
            + Buat Faktur Baru
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                📋 Faktur Bulan Ini
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">0</div>
              <p className="text-sm text-muted-foreground">Transaksi penjualan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                💰 Total Piutang
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">Rp 0</div>
              <p className="text-sm text-muted-foreground">Akan diterima</p>
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
              <p className="text-sm text-muted-foreground">Faktur kredit</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Fitur Barang Keluar</CardTitle>
            <CardDescription>
              Kelola penjualan dan faktur ke outlet
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">✨ Fitur Utama:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Pembuatan faktur penjualan otomatis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Support pembayaran COD dan kredit</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Jatuh tempo kredit: 7, 14, atau 30 hari</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>Monitoring piutang dari outlet</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">🔄 Alur Kerja:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                    <span>Buat faktur penjualan ke outlet</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                    <span>Pilih metode pembayaran dan jatuh tempo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                    <span>Konfirmasi pengiriman barang</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                    <span>Catat pembayaran/pelunasan piutang</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">⚡ Opsi Jatuh Tempo Kredit:</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">7</div>
                  <div className="text-sm text-muted-foreground">Hari</div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">14</div>
                  <div className="text-sm text-muted-foreground">Hari</div>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">30</div>
                  <div className="text-sm text-muted-foreground">Hari</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">🚧 Dalam Pengembangan</h4>
              <p className="text-green-800">
                Fitur lengkap barang keluar sedang dalam tahap pengembangan. 
                Akan segera tersedia dengan semua fungionalitas manajemen faktur penjualan.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}