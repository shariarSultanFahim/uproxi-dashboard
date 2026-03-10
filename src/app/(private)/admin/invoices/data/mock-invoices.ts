export type InvoiceStatus = "Paid" | "Unpaid";

export interface InvoiceItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

export interface Invoice {
    id: string;
    orderId: string;
    status: InvoiceStatus;
    shopName: string;
    shopAddress: string;
    shopAvatar: string;
    amount: number;
    createdAt: string;
    dueDate?: string;
    items: InvoiceItem[];
}

export const mockInvoices: Invoice[] = Array.from({ length: 15 }).map((_, index) => {
    const isPaid = index % 3 !== 0; // 2/3 paid, 1/3 unpaid roughly
    return {
        id: `INV-2024-${(index + 1).toString().padStart(3, "0")}`,
        orderId: `WND0G${index + 4}`,
        status: isPaid ? "Paid" : "Unpaid",
        shopName: "Green Valley Grocery",
        shopAddress: "Green Valley, Dubai, UAE",
        shopAvatar: "https://i.pravatar.cc/150?u=" + index, // Mock avatar
        amount: 11.70,
        createdAt: "Aug 6, 2024",
        dueDate: "2024-02-01",
        items: [
            { id: "1", name: "Product Item #1", quantity: 1, price: 104.17 },
            { id: "2", name: "Product Item #2", quantity: 9, price: 104.17 },
            { id: "3", name: "Product Item #3", quantity: 6, price: 104.17 },
            { id: "4", name: "Product Item #4", quantity: 9, price: 104.17 },
            { id: "5", name: "Product Item #5", quantity: 5, price: 104.17 },
        ],
    };
});
