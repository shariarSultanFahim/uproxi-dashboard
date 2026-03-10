import Image from "next/image"
import { useRouter } from "next/navigation"
import { Brand } from "./data/mock-data"
import { ArrowRight } from "lucide-react"

interface BrandCardProps {
    brand: Brand
}

export function BrandCard({ brand }: BrandCardProps) {
    const router = useRouter()

    return (
        <div
            className="group relative rounded-xl overflow-hidden cursor-pointer shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300"
            onClick={() => router.push(`/admin/brand-promotion/${brand.id}`)}
        >
            <div className="aspect-[3/1] w-full relative">
                <Image
                    src={brand.imageUrl}
                    alt={brand.name}
                    fill
                    className="object-cover"
                    unoptimized
                />
            </div>
            {/* Overlay arrow button on the bottom right like in the design */}
            <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-80 group-hover:opacity-100 transition-opacity shadow-sm">
                <ArrowRight className="w-4 h-4 text-slate-700" />
            </div>
        </div>
    )
}
