import { Button } from "@/components/ui/button"

interface UserHeaderProps {
    roleFilter: "Alls" | "Grocerymarkets" | "Suppliers"
    onRoleToggle: (role: "Alls" | "Grocerymarkets" | "Suppliers") => void
}

export function UserHeader({ roleFilter, onRoleToggle }: UserHeaderProps) {
    return (
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 shrink-0">
            <div>
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight">User Management</h1>
                <p className="text-slate-500 mt-2 text-sm md:text-base">Manage Grocerymarkets and Suppliers. Approve registrations and monitor activity.</p>
            </div>

            {/* Role Toggle Pills */}
            <div className="flex items-center p-1 bg-white rounded-full border border-slate-200 shadow-sm shrink-0 overflow-x-auto">
                <Button
                    variant="ghost"
                    onClick={() => onRoleToggle("Alls")}
                    className={`rounded-full px-6 h-10 font-medium whitespace-nowrap ${roleFilter === 'Alls' ? 'bg-[#39B5F9] text-white hover:bg-[#39B5F9] hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                >
                    Alls
                </Button>
                <Button
                    variant="ghost"
                    onClick={() => onRoleToggle("Grocerymarkets")}
                    className={`rounded-full px-6 h-10 font-medium whitespace-nowrap ${roleFilter === 'Grocerymarkets' ? 'bg-[#39B5F9] text-white hover:bg-[#39B5F9] hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                >
                    Grocerymarkets
                </Button>
                <Button
                    variant="ghost"
                    onClick={() => onRoleToggle("Suppliers")}
                    className={`rounded-full px-6 h-10 font-medium whitespace-nowrap ${roleFilter === 'Suppliers' ? 'bg-[#39B5F9] text-white hover:bg-[#39B5F9] hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                >
                    Suppliers
                </Button>
            </div>
        </div>
    )
}
