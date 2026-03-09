import Link from "next/link"
import {
    User as UserIcon,
    MapPin,
    Mail,
    Store,
    ShieldAlert,
    Trash2,
    CheckCircle2,
    MoreHorizontal
} from "lucide-react"

import { User } from "./data/users"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface UserTableProps {
    users: User[]
    isPendingTab: boolean
    isLoading?: boolean
}

export function UserTable({ users, isPendingTab, isLoading }: UserTableProps) {
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow className="border-b border-slate-50 hover:bg-transparent">
                        <TableHead className="text-[11px] font-bold tracking-widest text-slate-400 uppercase h-14 px-6">User / Business</TableHead>
                        <TableHead className="text-[11px] font-bold tracking-widest text-slate-400 uppercase h-14">Role</TableHead>
                        <TableHead className="text-[11px] font-bold tracking-widest text-slate-400 uppercase h-14">Contact</TableHead>
                        <TableHead className="text-[11px] font-bold tracking-widest text-slate-400 uppercase h-14">Status</TableHead>
                        <TableHead className="text-[11px] font-bold tracking-widest text-slate-400 uppercase h-14 text-right px-6">Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {isLoading ? (
                        <TableRow>
                            <TableCell colSpan={5} className="h-32 text-slate-400 text-center">
                                Loading users...
                            </TableCell>
                        </TableRow>
                    ) : users.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5} className="h-32 text-slate-400 text-center">
                                <div className="flex flex-col items-center justify-center">
                                    <UserIcon className="w-8 h-8 mb-2 opacity-20" />
                                    <p>No users found matching current filters.</p>
                                </div>
                            </TableCell>
                        </TableRow>
                    ) : (
                        users.map((user) => (
                            <TableRow
                                key={user.id}
                                className="hover:bg-slate-50/50 transition-colors border-slate-50"
                            >
                                <TableCell className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-10 w-10 border border-slate-100 shadow-sm rounded-xl">
                                            <AvatarImage src={user.avatarUrl} alt={user.businessName} />
                                            <AvatarFallback className="rounded-xl bg-slate-100 text-slate-600 font-semibold">{user.businessName.substring(0, 2)}</AvatarFallback>
                                        </Avatar>
                                        <div className="min-w-0">
                                            <div className="font-bold text-slate-800 text-[14px] truncate">{user.businessName}</div>
                                            <div className="flex items-center text-xs text-slate-500 mt-0.5">
                                                <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                                                <span className="truncate">{user.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="py-4">
                                    {user.role === "Grocerymarket" ? (
                                        <Badge variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100 border-none px-2.5 py-1 font-semibold rounded-lg">
                                            <Store className="w-3.5 h-3.5 mr-1.5" /> Grocerymarket
                                        </Badge>
                                    ) : (
                                        <Badge variant="secondary" className="bg-orange-50 text-orange-600 hover:bg-orange-100 border-none px-2.5 py-1 font-semibold rounded-lg">
                                            <UserIcon className="w-3.5 h-3.5 mr-1.5" /> Supplier
                                        </Badge>
                                    )}
                                </TableCell>

                                <TableCell className="py-4">
                                    <div className="flex items-center text-sm font-semibold text-slate-700 mb-1">
                                        <UserIcon className="w-3.5 h-3.5 mr-2 text-slate-400 stroke-[2.5]" />
                                        <span className="truncate">{user.contactName}</span>
                                    </div>
                                    <div className="flex items-center text-[12px] text-slate-500">
                                        <Mail className="w-3.5 h-3.5 mr-2 text-slate-400" />
                                        <span className="truncate">{user.email}</span>
                                    </div>
                                </TableCell>

                                <TableCell className="py-4">
                                    {user.status === "Active" && (
                                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border-none px-2.5 py-1 font-semibold rounded-lg">
                                            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 stroke-[2.5]" /> Active
                                        </Badge>
                                    )}
                                    {user.status === "Suspended" && (
                                        <Badge variant="secondary" className="bg-rose-50 text-rose-600 hover:bg-rose-100 border-none px-2.5 py-1 font-semibold rounded-lg">
                                            Suspended
                                        </Badge>
                                    )}
                                    {user.status === "Pending" && (
                                        <Badge variant="secondary" className="bg-amber-50 text-amber-600 hover:bg-amber-100 border-none px-2.5 py-1 font-semibold rounded-lg">
                                            <ShieldAlert className="w-3.5 h-3.5 mr-1.5 stroke-[2.5]" /> Pending
                                        </Badge>
                                    )}
                                </TableCell>

                                <TableCell className="text-right px-6 py-4">
                                    {isPendingTab ? (
                                        <div className="flex items-center justify-end gap-2">
                                            <Link href={`/admin/user-management/${user.id}`}>
                                                <Button variant="secondary" className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs h-8 px-4">
                                                    View Details
                                                </Button>
                                            </Link>
                                            <Button variant="default" className="bg-[#39B5F9] hover:bg-[#22A0E6] text-white font-semibold rounded-xl text-xs h-8 px-4 shadow-sm">
                                                Approve
                                            </Button>
                                        </div>
                                    ) : (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100">
                                                    <MoreHorizontal className="h-5 w-5" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end" className="w-48 rounded-xl shadow-lg border-slate-100 p-2">
                                                <DropdownMenuItem asChild className="rounded-lg cursor-pointer py-2.5 font-medium text-slate-700">
                                                    <Link href={`/admin/user-management/${user.id}`}>
                                                        <Store className="mr-2 h-4 w-4" />
                                                        <span>View Profile</span>
                                                    </Link>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="rounded-lg cursor-pointer py-2.5 font-medium text-orange-600 focus:text-orange-600 focus:bg-orange-50">
                                                    <ShieldAlert className="mr-2 h-4 w-4" />
                                                    <span>Suspend User</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className="rounded-lg cursor-pointer py-2.5 font-medium text-rose-600 focus:text-rose-600 focus:bg-rose-50">
                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                    <span>Remove User</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
