"use client"

import { use } from "react"
import Link from "next/link"
import { ArrowLeft, MapPin, Mail, Phone, Store, User as UserIcon } from "lucide-react"
import { mockUsers } from "../components/data/users"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export default function UserDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const unwrappedParams = use(params)

    // Find the exact user from mock array
    const user = mockUsers.find(u => u.id === unwrappedParams.id)

    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-8 text-slate-500">
                <h2 className="text-xl font-bold mb-2 text-slate-800">User Not Found</h2>
                <p>The profile you are looking for does not exist.</p>
                <Link href="/admin/user-management" className="mt-4 text-[#39B5F9] font-medium hover:underline">
                    Return to directory
                </Link>
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-0 h-full p-2 md:p-6 lg:p-8 space-y-6 bg-slate-50/30 overflow-y-auto">

            {/* Header section with back button */}
            <div className="flex items-center gap-4 shrink-0">
                <Link href="/admin/user-management">
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-slate-200 text-slate-500 hover:text-slate-800 shrink-0">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">User Profile</h1>
                    <p className="text-slate-500 text-sm">Detailed information and verification documents.</p>
                </div>
            </div>

            {/* Main Responsive Layout */}
            <div className="flex flex-col lg:flex-row gap-6 lg:items-start shrink-0 pb-8">

                {/* Left Column (Profile & Contact) */}
                <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0">

                    {/* Main Identity Card */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center">
                        <Avatar className="h-32 w-32 border border-slate-100 shadow-md rounded-3xl mb-4">
                            <AvatarImage src={user.avatarUrl} alt={user.businessName} />
                            <AvatarFallback className="rounded-3xl bg-slate-100 text-slate-400 font-bold text-2xl">{user.businessName.substring(0, 2)}</AvatarFallback>
                        </Avatar>

                        <h2 className="text-xl font-bold text-slate-800">{user.businessName}</h2>
                        <p className="text-slate-500 text-sm mb-4">{user.contactName}</p>

                        {user.role === "Grocerymarket" ? (
                            <Badge variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-none px-4 py-1.5 font-semibold rounded-lg mb-6">
                                <Store className="w-4 h-4 mr-2" /> Grocerymarket
                            </Badge>
                        ) : (
                            <Badge variant="secondary" className="bg-orange-50 text-orange-600 hover:bg-orange-100 border-none px-4 py-1.5 font-semibold rounded-lg mb-6">
                                <UserIcon className="w-4 h-4 mr-2" /> Supplier
                            </Badge>
                        )}

                        {/* Approvals Action Block matching screens */}
                        {user.status === "Pending" && (
                            <div className="w-full flex items-center gap-3">
                                <Button className="flex-1 rounded-xl h-11 bg-[#39B5F9] hover:bg-[#22A0E6] text-white font-semibold text-[15px] shadow-sm">
                                    Approve
                                </Button>
                                <Button variant="outline" className="flex-1 rounded-xl h-11 border-slate-200 text-rose-500 hover:text-rose-600 hover:bg-rose-50 hover:border-rose-200 font-semibold text-[15px]">
                                    Reject
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Contact Info Card */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                        <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-5">Contact Info</h3>

                        <div className="space-y-5">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-slate-400" />
                                </div>
                                <div>
                                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5">Email Address</div>
                                    <div className="font-semibold text-slate-700 text-sm">{user.email}</div>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-slate-400" />
                                </div>
                                <div>
                                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5">Phone Number</div>
                                    <div className="font-semibold text-slate-700 text-sm">{user.phone}</div>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-slate-400" />
                                </div>
                                <div>
                                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5">Address</div>
                                    <div className="font-semibold text-slate-700 text-sm leading-relaxed">{user.address}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (Business & Documents) */}
                <div className="flex-1 flex flex-col gap-6 min-w-0">

                    {/* Business Details Grid */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 lg:p-8">
                        <h3 className="text-base font-bold text-slate-800 mb-6">Business Details</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4">
                            <div>
                                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</div>
                                <div className="font-bold text-slate-800 text-base">{user.contactName}</div>
                            </div>

                            <div>
                                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Company / Grocery Name</div>
                                <div className="font-bold text-slate-800 text-base">{user.businessName}</div>
                            </div>

                            <div>
                                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Date of Birth</div>
                                <div className="flex items-center font-bold text-slate-800 text-base">
                                    <div className="w-4 h-4 rounded border border-slate-300 mr-2 opacity-50 flex items-center justify-center">
                                        <div className="w-2.5 h-0.5 bg-slate-400" />
                                    </div>
                                    {user.dateOfBirth}
                                </div>
                            </div>

                            <div>
                                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Account Status</div>
                                {user.status === "Active" && (
                                    <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border-none px-3 py-1 font-semibold rounded-lg">
                                        Active
                                    </Badge>
                                )}
                                {user.status === "Suspended" && (
                                    <Badge variant="secondary" className="bg-rose-50 text-rose-600 hover:bg-rose-100 border-none px-3 py-1 font-semibold rounded-lg">
                                        Suspended
                                    </Badge>
                                )}
                                {user.status === "Pending" && (
                                    <Badge variant="secondary" className="bg-amber-50 text-amber-600 hover:bg-amber-100 border-none px-3 py-1 font-semibold rounded-lg">
                                        Pending
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* License Document Preview Container */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 lg:p-8 flex-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="text-slate-500">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            </div>
                            <h3 className="text-base font-bold text-slate-800">License & Documentation</h3>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden relative">
                            <Image
                                src={user.licenseUrl}
                                width={800}
                                height={600}
                                alt={`${user.businessName} License Documentation`}
                                className="w-full h-auto object-cover "
                            />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
