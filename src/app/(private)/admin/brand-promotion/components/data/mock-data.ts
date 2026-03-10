export interface Brand {
    id: string;
    name: string;
    imageUrl: string;
}

export interface Product {
    id: string;
    brandId: string;
    name: string;
    quantity: string;
    regularPrice: number;
    bulkPrice: number;
    savings: number;
    bulkUnlockQuantity: number;
    currentBulkQuantity: number;
    imageUrl: string;
    sku: string;
    stock: number;
}

export const mockBrands: Brand[] = Array.from({ length: 15 }).map((_, i) => ({
    id: `brand-${i + 1}`,
    name: `Chocolate Rocher ${i + 1}`,
    // Using a placeholder that looks like a wide banner
    imageUrl: `https://placehold.co/600x200/eadecd/665246?text=Brand+${i + 1}`,
}));

export const mockProducts: Product[] = Array.from({ length: 25 }).map((_, i) => ({
    id: `product-${i + 1}`,
    brandId: `brand-${(i % 15) + 1}`,
    name: "Chocolate Box",
    quantity: "1 x 20",
    regularPrice: 999,
    bulkPrice: 850,
    savings: 149,
    bulkUnlockQuantity: 100,
    currentBulkQuantity: 17,
    imageUrl: `https://placehold.co/400x400/222d4f/ffffff?text=Product+${i + 1}`,
    sku: `P${100 + i}W`,
    stock: 100
}));
