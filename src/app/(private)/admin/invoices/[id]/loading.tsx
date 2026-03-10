import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex-1 w-full flex flex-col justify-center items-center py-32">
            <Loader2 className="w-8 h-8 animate-spin text-[#3dbcf9] mb-4" />
            <p className="text-[#8e98a8] text-sm font-medium">Loading invoice details...</p>
        </div>
    );
}
