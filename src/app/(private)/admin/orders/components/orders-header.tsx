import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"

export function OrdersHeader() {
    return (
        <div className="flex  items-center gap-4 mb-6">
            <div className="relative flex-1 w-full max-w-[400px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                    placeholder="Search by city, zone, store"
                    className="pl-10 h-11 rounded-xl bg-white border-slate-200 shadow-sm w-full text-sm font-medium"
                />
            </div>

            <Button variant="outline" className="h-11 rounded-xl border-slate-200 text-slate-500 font-semibold gap-2 border bg-white hover:bg-slate-50">
                <Filter className="w-4 h-4" />
                Filter Date
            </Button>
        </div>
    )
}
