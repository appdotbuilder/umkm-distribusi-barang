import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface StockMovement {
  id: number;
  type: 'in' | 'out';
  quantity: number;
  created_at: string;
  product?: {
    name: string;
    unit: string;
  };
}

interface LowStockProduct {
  id: number;
  name: string;
  stock: number;
  minimum_stock: number;
  unit: string;
}

interface Props {
  stats?: {
    totalProducts: number;
    lowStockProducts: number;
    totalIncomingGoods: number;
    totalOutgoingGoods: number;
    pendingPayments: number;
    pendingReceivables: number;
  };
  recentMovements?: StockMovement[];
  lowStockProducts?: LowStockProduct[];
  [key: string]: unknown;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ stats, recentMovements, lowStockProducts }: Props) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard Distribusi Barang" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">📊 Dashboard Distribusi Barang</h1>
            <p className="text-gray-600 mt-1">Pantau bisnis distribusi Anda secara real-time</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Produk</CardTitle>
              <span className="text-2xl">📦</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats?.totalProducts || 0}</div>
              <p className="text-xs text-muted-foreground">
                Produk aktif dalam sistem
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stok Menipis</CardTitle>
              <span className="text-2xl">⚠️</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{stats?.lowStockProducts || 0}</div>
              <p className="text-xs text-muted-foreground">
                Produk perlu restok
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Barang Masuk (Bulan Ini)</CardTitle>
              <span className="text-2xl">📥</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats?.totalIncomingGoods || 0}</div>
              <p className="text-xs text-muted-foreground">
                Transaksi dari supplier
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Barang Keluar (Bulan Ini)</CardTitle>
              <span className="text-2xl">📤</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats?.totalOutgoingGoods || 0}</div>
              <p className="text-xs text-muted-foreground">
                Penjualan ke outlet
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hutang Supplier</CardTitle>
              <span className="text-2xl">💳</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                Rp {new Intl.NumberFormat('id-ID').format(stats?.pendingPayments || 0)}
              </div>
              <p className="text-xs text-muted-foreground">
                Belum dibayar
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Piutang Outlet</CardTitle>
              <span className="text-2xl">💰</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                Rp {new Intl.NumberFormat('id-ID').format(stats?.pendingReceivables || 0)}
              </div>
              <p className="text-xs text-muted-foreground">
                Akan diterima
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link href="/products">
            <Button className="w-full h-16 text-left justify-start" variant="outline">
              <div>
                <div className="text-lg">📦 Kelola Produk</div>
                <div className="text-sm text-muted-foreground">Master data produk</div>
              </div>
            </Button>
          </Link>
          
          <Link href="/incoming-goods">
            <Button className="w-full h-16 text-left justify-start" variant="outline">
              <div>
                <div className="text-lg">📥 Barang Masuk</div>
                <div className="text-sm text-muted-foreground">Invoice supplier</div>
              </div>
            </Button>
          </Link>
          
          <Link href="/outgoing-goods">
            <Button className="w-full h-16 text-left justify-start" variant="outline">
              <div>
                <div className="text-lg">📤 Barang Keluar</div>
                <div className="text-sm text-muted-foreground">Faktur penjualan</div>
              </div>
            </Button>
          </Link>
          
          <Link href="/reports/stock">
            <Button className="w-full h-16 text-left justify-start" variant="outline">
              <div>
                <div className="text-lg">📊 Laporan Stok</div>
                <div className="text-sm text-muted-foreground">Kartu stok</div>
              </div>
            </Button>
          </Link>
        </div>

        {/* Recent Activity & Alerts */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Pergerakan Stok Terbaru</CardTitle>
              <CardDescription>
                10 transaksi terakhir
              </CardDescription>
            </CardHeader>
            <CardContent>
              {recentMovements && recentMovements.length > 0 ? (
                <div className="space-y-3">
                  {recentMovements.map((movement, index: number) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">
                          {movement.type === 'in' ? '📥' : '📤'}
                        </span>
                        <div>
                          <div className="font-medium">{movement.product?.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {movement.type === 'in' ? 'Masuk' : 'Keluar'} {movement.quantity} {movement.product?.unit}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(movement.created_at).toLocaleDateString('id-ID')}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-muted-foreground">Belum ada pergerakan stok</p>
                  <p className="text-sm text-muted-foreground mt-1">Mulai dengan menambah produk dan transaksi</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alert Stok Minimum</CardTitle>
              <CardDescription>
                Produk yang perlu segera direstok
              </CardDescription>
            </CardHeader>
            <CardContent>
              {lowStockProducts && lowStockProducts.length > 0 ? (
                <div className="space-y-3">
                  {lowStockProducts.map((product, index: number) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg border-orange-200">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">⚠️</span>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Stok: {product.stock} {product.unit} (Min: {product.minimum_stock})
                          </div>
                        </div>
                      </div>
                      <Link href={`/products/${product.id}`}>
                        <Button size="sm" variant="outline">
                          Detail
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">✅</div>
                  <p className="text-muted-foreground">Semua produk stoknya aman</p>
                  <p className="text-sm text-muted-foreground mt-1">Tidak ada produk yang stoknya di bawah minimum</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}