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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface Product {
  id: number;
  code: string;
  name: string;
  unit: string;
  purchase_price: number;
  selling_price: number;
  stock: number;
  minimum_stock: number;
  status: string;
}

interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

interface PaginationMeta {
  total: number;
  per_page: number;
  current_page: number;
}

interface Props {
  products: {
    data: Product[];
    links: PaginationLink[];
    meta: PaginationMeta;
  };
  [key: string]: unknown;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Produk',
        href: '/products',
    },
];

export default function ProductsIndex({ products }: Props) {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Kelola Produk" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">📦 Kelola Produk</h1>
            <p className="text-gray-600 mt-1">Master data produk untuk distribusi</p>
          </div>
          <Link href="/products/create">
            <Button>
              + Tambah Produk
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Daftar Produk</CardTitle>
            <CardDescription>
              {products.meta?.total || 0} produk dalam sistem
            </CardDescription>
          </CardHeader>
          <CardContent>
            {products.data && products.data.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Kode</TableHead>
                      <TableHead>Nama Produk</TableHead>
                      <TableHead>Unit</TableHead>
                      <TableHead className="text-right">Harga Beli</TableHead>
                      <TableHead className="text-right">Harga Jual</TableHead>
                      <TableHead className="text-center">Stok</TableHead>
                      <TableHead className="text-center">Status</TableHead>
                      <TableHead className="text-center">Aksi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.data.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-mono text-sm">{product.code}</TableCell>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.unit}</TableCell>
                        <TableCell className="text-right">
                          Rp {new Intl.NumberFormat('id-ID').format(product.purchase_price)}
                        </TableCell>
                        <TableCell className="text-right">
                          Rp {new Intl.NumberFormat('id-ID').format(product.selling_price)}
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex flex-col items-center">
                            <span className={`font-semibold ${
                              product.stock <= product.minimum_stock 
                                ? 'text-red-600' 
                                : 'text-green-600'
                            }`}>
                              {product.stock}
                            </span>
                            {product.stock <= product.minimum_stock && (
                              <span className="text-xs text-red-500">⚠️ Low</span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant={product.status === 'active' ? 'default' : 'secondary'}>
                            {product.status === 'active' ? 'Aktif' : 'Nonaktif'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <Link href={`/products/${product.id}`}>
                              <Button size="sm" variant="outline">
                                Detail
                              </Button>
                            </Link>
                            <Link href={`/products/${product.id}/edit`}>
                              <Button size="sm" variant="outline">
                                Edit
                              </Button>
                            </Link>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Belum ada produk</h3>
                <p className="text-gray-500 mb-6">Mulai dengan menambahkan produk pertama Anda</p>
                <Link href="/products/create">
                  <Button>+ Tambah Produk Pertama</Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pagination would go here if needed */}
        {products.links && products.links.length > 3 && (
          <div className="mt-6 flex justify-center">
            <div className="flex space-x-2">
              {products.links.map((link, index: number) => (
                <div key={index}>
                  {link.url ? (
                    <Link href={link.url}>
                      <Button 
                        variant={link.active ? 'default' : 'outline'} 
                        size="sm"
                        dangerouslySetInnerHTML={{ __html: link.label }}
                      />
                    </Link>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      disabled
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}