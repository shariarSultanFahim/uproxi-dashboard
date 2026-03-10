"use client";

import { useState } from "react";
import { TotalRevenue } from "./total-revenue";
import { BulkUnlockProgress } from "./bulk-unlock-progress";
import { SalesByCategory } from "./sales-by-category";

type Tab = "Total Revenue" | "Bulk Unlock Progress" | "Sales by Category";

export function AnalyticsTabs() {
    const [activeTab, setActiveTab] = useState<Tab>("Sales by Category");

    return (
        <div className="flex-1 w-full flex flex-col gap-4">
            {/* Header Section */}
            <div className="flex flex-col gap-2 mb-4">
                <h1 className="text-3xl font-bold text-[#202c45] tracking-tight">Analytics Monetization</h1>
                <p className="text-[#475467] text-[15px] max-w-3xl leading-relaxed">
                    Control how suppliers access their data. You can keep it free to encourage growth, or enable the paywall to generate revenue.
                </p>
            </div>

            {/* Segmented Control */}
            <div className="flex justify-center w-full max-w-2xl mx-auto">
                <div className="flex items-center bg-[#f8f9fc] p-1 rounded-xl w-full">
                    {(["Total Revenue", "Bulk Unlock Progress", "Sales by Category"] as Tab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-3 text-center text-sm transition-all duration-200 ${activeTab === tab
                                ? "font-bold text-[#202c45] bg-white rounded-lg shadow-sm"
                                : "font-semibold text-[#8e98a8] hover:text-[#202c45]"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-5xl mx-auto">
                {activeTab === "Total Revenue" && <TotalRevenue />}
                {activeTab === "Bulk Unlock Progress" && <BulkUnlockProgress />}
                {activeTab === "Sales by Category" && <SalesByCategory />}
            </div>
        </div>
    );
}
