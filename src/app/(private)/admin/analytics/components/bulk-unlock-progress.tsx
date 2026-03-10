"use client";

import { useState } from "react";
import { Lock, Unlock, DollarSign, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function BulkUnlockProgress() {
    const [isPaywallActive, setIsPaywallActive] = useState(true);
    const [currentFee, setCurrentFee] = useState(199);
    const [draftFee, setDraftFee] = useState("199");

    const supplierCount = 142;
    const estimatedRevenue = isPaywallActive ? currentFee * supplierCount : 0;

    const handleUpdatePricing = () => {
        const parsed = parseInt(draftFee);
        if (!isNaN(parsed) && parsed >= 0) {
            setCurrentFee(parsed);
        }
    };

    return (
        <div className="flex-1 space-y-8 mt-8">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {/* Left Card - Paywall Control */}
                <Card className="rounded-3xl border-slate-100 shadow-sm bg-white p-10 flex flex-col items-center text-center relative overflow-hidden h-full">
                    {/* Top blue bar decorative element */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-[#3dbcf9]" />

                    <div className="flex flex-col justify-center items-center">
                        <div className="w-24 h-24 bg-[#f8f9fc] rounded-3xl flex items-center justify-center mb-8 shrink-0">
                            {isPaywallActive ? (
                                <Lock className="w-10 h-10 text-[#3dbcf9]" strokeWidth={2.5} />
                            ) : (
                                <Unlock className="w-10 h-10 text-[#3dbcf9]" strokeWidth={2.5} />
                            )}
                        </div>

                        <h2 className="text-2xl font-bold text-[#202c45] mb-4">
                            {isPaywallActive ? "Paywall Active" : "Paywall Disabled"}
                        </h2>
                        <p className="text-[#8e98a8] text-[15px] mb-10 max-w-sm">
                            {isPaywallActive
                                ? "Access is RESTRICTED. Suppliers must pay the monthly subscription fee to view their data."
                                : "Access is FREE. All suppliers can view their analytics data without paying a monthly fee."
                            }
                        </p>
                    </div>

                    <div className="w-full flex flex-col items-center">
                        <Button
                            onClick={() => setIsPaywallActive(!isPaywallActive)}
                            className={`w-full max-w-sm h-14 rounded-xl font-bold text-lg shadow-md transition-all ${isPaywallActive
                                ? "bg-[#3dbcf9] hover:bg-[#3dbcf9]/90 text-white shadow-[#3dbcf9]/20"
                                : "bg-[#1eb564] hover:bg-[#1eb564]/90 text-white shadow-[#1eb564]/20"
                                }`}
                        >
                            {isPaywallActive ? "Disable Paywall (Make Free)" : "Enable Paywall"}
                        </Button>

                        <div className="flex items-center text-[#8e98a8] text-xs font-medium mt-6">
                            <svg className="w-4 h-4 mr-1.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            Affects {supplierCount} Suppliers
                        </div>
                    </div>
                </Card>

                {/* Right Card - Subscription Fee */}
                <Card className="rounded-3xl border-slate-100 shadow-sm bg-white p-10 flex flex-col relative overflow-hidden h-full">
                    <div className="flex items-start gap-5 mb-10 shrink-0">
                        <div className="w-14 h-14 bg-[#f4f7ff] rounded-2xl flex items-center justify-center shrink-0">
                            <DollarSign className="w-6 h-6 text-[#1eb564]" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#202c45]">Subscription Fee</h3>
                            <p className="text-[#8e98a8] text-sm">Monthly Rate per Supplier</p>
                        </div>
                    </div>

                    <div className="mb-8 shrink-0">
                        <p className="text-[#8e98a8] text-xs font-bold tracking-wider uppercase mb-2">Current Fee</p>
                        <div className="flex items-baseline">
                            <span className="text-5xl font-extrabold text-[#202c45] tracking-tight">${currentFee}</span>
                            <span className="text-xl font-medium text-[#8e98a8] ml-1">/mo</span>
                        </div>
                    </div>

                    <div className={`rounded-2xl p-6 mb-10 border transition-colors shrink-0 flex-1 ${isPaywallActive ? "bg-slate-50 border-slate-100 opacity-60" : "bg-[#f8f9fc] border-slate-100"}`}>
                        <label className="text-[#8e98a8] text-xs font-semibold mb-3 block">Set New Price</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8e98a8] font-bold text-lg">$</span>
                            <Input
                                value={draftFee}
                                onChange={(e) => setDraftFee(e.target.value)}
                                disabled={isPaywallActive}
                                className="h-14 pl-8 bg-white border-slate-200 rounded-xl text-lg font-bold text-[#202c45] disabled:cursor-not-allowed"
                                placeholder="199"
                                type="number"
                                min="0"
                            />
                        </div>
                    </div>

                    <div className="mt-auto w-full flex flex-col">
                        <div className="flex justify-between items-end mb-6">
                            <span className="text-[#8e98a8] text-sm font-semibold">Est. Monthly Revenue</span>
                            <span className="text-2xl font-bold text-[#1eb564]">
                                ${estimatedRevenue.toLocaleString()}
                            </span>
                        </div>

                        <Button
                            onClick={handleUpdatePricing}
                            disabled={isPaywallActive}
                            className="w-full h-14 rounded-xl text-white font-bold"
                        >
                            Update Pricing
                        </Button>
                    </div>
                </Card>
            </div>

            {/* Bottom Banner */}
            <div className={`rounded-xl p-5 flex items-center gap-4 border ${isPaywallActive
                ? "bg-[#f2f9ff] border-[#3dbcf9]/30 text-[#3dbcf9]"
                : "bg-[#f2fff7] border-[#1eb564]/30 text-[#1eb564]"
                }`}>
                <CreditCard className="w-6 h-6 shrink-0" />
                <div>
                    <span className="font-bold mr-1">
                        {isPaywallActive ? "Monetization Active:" : "Monetization Inactive:"}
                    </span>
                    <span className="font-medium text-[15px] opacity-90">
                        {isPaywallActive
                            ? `Suppliers are now required to pay $${currentFee}/mo to access their analytics dashboard.`
                            : "Analytics are currently free for all suppliers."}
                    </span>
                </div>
            </div>
        </div>
    );
}
