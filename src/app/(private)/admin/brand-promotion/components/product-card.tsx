import Image from "next/image"
import { Product } from "./data/mock-data"
import { Heart } from "lucide-react"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const progressPercentage = Math.min(
        100,
        Math.max(0, (product.currentBulkQuantity / product.bulkUnlockQuantity) * 100)
    )

    return (
        <div className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group flex flex-col h-full">
            {/* Image Container */}
            <div className="relative aspect-square w-full p-6 bg-slate-50/50 flex items-center justify-center">
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm text-slate-400 hover:text-red-500 transition-colors z-10 border border-slate-100">
                    <Heart className="w-4 h-4" />
                </button>
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="p-4 flex flex-col flex-1 bg-white">
                <div className="mb-4">
                    <h3 className="font-bold text-slate-800 text-[15px] leading-tight mb-1">{product.name}</h3>
                    <p className="text-slate-400 text-xs">{product.quantity}</p>
                </div>

                {/* Pricing Block */}
                <div className="flex items-center justify-between mb-5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="text-center w-1/3 border-r border-slate-200">
                        <p className="text-[10px] text-slate-400 uppercase font-semibold mb-0.5">Regular</p>
                        <p className="font-bold text-slate-800 text-sm">${product.regularPrice}</p>
                    </div>
                    <div className="text-center w-1/3 border-r border-slate-200">
                        <p className="text-[10px] text-emerald-500 uppercase font-bold mb-0.5">Bulk</p>
                        <p className="font-bold text-slate-800 text-sm">${product.bulkPrice}</p>
                    </div>
                    <div className="text-center w-1/3">
                        <p className="text-[10px] text-amber-500 uppercase font-bold mb-0.5">Save</p>
                        <p className="font-bold text-amber-500 text-sm">~${product.savings}</p>
                    </div>
                </div>

                {/* Progress Block */}
                <div className="mt-auto">
                    <div className="flex justify-between items-center text-xs text-slate-500 font-medium mb-2">
                        <span>Add {product.bulkUnlockQuantity - product.currentBulkQuantity} more to unlock bulk</span>
                        <span className="text-sky-500">{progressPercentage.toFixed(0)}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-sky-500 rounded-full"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
