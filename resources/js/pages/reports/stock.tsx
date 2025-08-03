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
        title: 'Laporan',
        href: '/reports',
    },
    {
        title: 'Kartu Stok',
        href: '/reports/stock',
    },
];

export default function StockReport() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Laporan Kartu Stok" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">📊 Laporan Kartu Stok</h1>
            <p className="text-gray-600 mt-1">Pantau pergerakan stok barang secara detail</p>
          </div>
          <Button>
            📥 Export Excel
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                📦 Total Item
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">0</div>
              <p className="text-sm text-muted-foreground">Jenis produk</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                📥 Total Masuk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">0</div>
              <p className="text-sm text-muted-foreground">Unit bulan ini</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                📤 Total Keluar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">0</div>
              <p className="text-sm text-muted-foreground">Unit bulan ini</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                ⚠️ Low Stock
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">0</div>
              <p className="text-sm text-muted-foreground">Produk perlu restok</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Filter Laporan</CardTitle>
              <CardDescription>
                Pilih produk dan periode untuk melihat kartu stok
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Produk</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option value="">Pilih produk...</option>
                    <option value="all">Semua produk</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Dari Tanggal</label>
                    <input type="date" className="w-full p-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Sampai Tanggal</label>
                    <input type="date" className="w-full p-2 border rounded-lg" />
                  </div>
                </div>
                <Button className="w-full">
                  🔍 Tampilkan Laporan
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fitur Kartu Stok</CardTitle>
              <CardDescription>
                Informasi lengkap pergerakan stok
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Histori lengkap masuk & keluar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Saldo stok real-time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Referensi transaksi (invoice/faktur)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Filter berdasarkan periode</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Export ke Excel/PDF</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contoh Kartu Stok</CardTitle>
            <CardDescription>
              Tampilan kartu stok untuk produk terpilih
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-left">Tanggal</th>
                    <th className="border border-gray-300 p-3 text-left">Referensi</th>
                    <th className="border border-gray-300 p-3 text-center">Masuk</th>
                    <th className="border border-gray-300 p-3 text-center">Keluar</th>
                    <th className="border border-gray-300 p-3 text-center">Saldo</th>
                    <th className="border border-gray-300 p-3 text-left">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 text-center" colSpan={6}>
                      <div className="py-8 text-gray-500">
                        <div className="text-4xl mb-2">📊</div>
                        <p>Pilih produk dan periode untuk melihat kartu stok</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">🚧 Dalam Pengembangan</h4>
              <p className="text-purple-800">
                Fitur lengkap laporan kartu stok sedang dalam tahap pengembangan. 
                Akan menampilkan histori pergerakan stok yang detail dan dapat diekspor.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}