import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface UserFiltersProps {
    activeTab: "Active Directory" | "New Requests"
    onTabChange: (tab: "Active Directory" | "New Requests") => void
    pendingCount: number
    supplierFilter: string
    setSupplierFilter: (val: string) => void
    areaFilter: string
    setAreaFilter: (val: string) => void
    cityFilter: string
    setCityFilter: (val: string) => void
}

export function UserFilters({
    activeTab,
    onTabChange,
    pendingCount,
    supplierFilter,
    setSupplierFilter,
    areaFilter,
    setAreaFilter,
    cityFilter,
    setCityFilter
}: UserFiltersProps) {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 shrink-0">

            {/* Main Tab Switcher */}
            <div className="flex items-center p-1 bg-slate-100/80 rounded-xl overflow-x-auto w-full max-w-sm">
                <Button
                    variant="ghost"
                    onClick={() => onTabChange("Active Directory")}
                    className={`flex-1 rounded-lg px-4 py-2 h-10 font-semibold transition-all ${activeTab === 'Active Directory' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    Active Directory
                </Button>
                <Button
                    variant="ghost"
                    onClick={() => onTabChange("New Requests")}
                    className={`flex-1 rounded-lg px-4 py-2 h-10 font-semibold transition-all relative ${activeTab === 'New Requests' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    New Requests
                    {pendingCount > 0 && (
                        <span className="ml-2 w-2 h-2 rounded-full bg-red-500 absolute top-3 right-3 shrink-0" />
                    )}
                </Button>
            </div>

            {/* Dropdown Filters View */}
            <div className="flex items-center gap-3 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
                <Select value={supplierFilter} onValueChange={setSupplierFilter}>
                    <SelectTrigger className="w-[140px] bg-white border-slate-200 rounded-xl text-slate-500 shadow-sm h-10">
                        <SelectValue placeholder="Supplier" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-100 shadow-lg">
                        <SelectItem value="all">Supplier</SelectItem>
                        <SelectItem value="sup1">Supplier 1</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={supplierFilter} onValueChange={setSupplierFilter}>
                    {/* Duplicate according to specific wireframes */}
                    <SelectTrigger className="w-[140px] bg-white border-slate-200 rounded-xl text-slate-500 shadow-sm h-10">
                        <SelectValue placeholder="Supplier" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-100 shadow-lg">
                        <SelectItem value="all">Supplier</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={areaFilter} onValueChange={setAreaFilter}>
                    <SelectTrigger className="w-[140px] bg-white border-slate-200 rounded-xl text-slate-500 shadow-sm h-10">
                        <SelectValue placeholder="Area" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-100 shadow-lg">
                        <SelectItem value="all">Area</SelectItem>
                        <SelectItem value="Downtown">Downtown</SelectItem>
                        <SelectItem value="Valley">Valley</SelectItem>
                        <SelectItem value="West">West</SelectItem>
                    </SelectContent>
                </Select>

                <Select value={cityFilter} onValueChange={setCityFilter}>
                    <SelectTrigger className="w-[140px] bg-white border-slate-200 rounded-xl text-slate-500 shadow-sm h-10">
                        <SelectValue placeholder="City" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-100 shadow-lg">
                        <SelectItem value="all">City</SelectItem>
                        <SelectItem value="Dubai">Dubai</SelectItem>
                        <SelectItem value="Abu Dhabi">Abu Dhabi</SelectItem>
                        <SelectItem value="Sharjah">Sharjah</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
