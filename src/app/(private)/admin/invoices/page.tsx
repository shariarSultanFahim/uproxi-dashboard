"use client";

import { useState } from "react";
import Link from "next/link";
import { InvoiceCard } from "./components/invoice-card";
import { InvoicePagination } from "./components/invoice-pagination";
import { mockInvoices } from "./data/mock-invoices";

const ITEMS_PER_PAGE = 6;

export default function InvoicesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockInvoices.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentInvoices = mockInvoices.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div className="flex-1 space-y-6 w-full">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold text-[#202c45] tracking-tight">Invoices</h1>
        <p className="text-[#475467] text-[15px]">Manage and view all your invoices here.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentInvoices.map((invoice) => (
          <Link key={invoice.id} href={`/admin/invoices/${invoice.id}`}>
            <InvoiceCard invoice={invoice} />
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <InvoicePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
