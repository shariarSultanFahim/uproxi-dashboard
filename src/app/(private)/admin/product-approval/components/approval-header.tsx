import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

interface ApprovalHeaderProps {
    onTabChange: (tab: string) => void;
}

export function ApprovalHeader({ onTabChange }: ApprovalHeaderProps) {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-1">Product Approvals</h1>
                <p className="text-slate-500 text-[15px]">Review individual products and bulk sheet uploads.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="relative w-full sm:w-[280px]">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                        placeholder="Search requests..."
                        className="pl-10 h-12 rounded-xl bg-white border-slate-100 shadow-sm w-full"
                    />
                </div>

                <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-100 self-stretch flex items-center shrink-0">
                    <Tabs defaultValue="all" onValueChange={onTabChange} className="h-full">
                        <TabsList className="bg-transparent gap-1 h-full">
                            <TabsTrigger
                                value="all"
                                className="rounded-lg px-5 py-2 data-[state=active]:bg-sky-400 data-[state=active]:text-white data-[state=active]:shadow-none text-slate-500 font-medium"
                            >
                                All
                            </TabsTrigger>
                            <TabsTrigger
                                value="individual"
                                className="rounded-lg px-4 py-2 data-[state=active]:bg-sky-400 data-[state=active]:text-white data-[state=active]:shadow-none text-slate-500 font-medium"
                            >
                                Individual
                            </TabsTrigger>
                            <TabsTrigger
                                value="bulk"
                                className="rounded-lg px-4 py-2 data-[state=active]:bg-sky-400 data-[state=active]:text-white data-[state=active]:shadow-none text-slate-500 font-medium"
                            >
                                Bulk Sheets
                            </TabsTrigger>
                            <TabsTrigger
                                value="list"
                                className="rounded-lg px-4 py-2 data-[state=active]:bg-sky-400 data-[state=active]:text-white data-[state=active]:shadow-none text-slate-500 font-medium"
                            >
                                Product List
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
