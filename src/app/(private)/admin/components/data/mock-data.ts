export const orderFrequencyData = [
    { day: 'Mon', orders: 12 },
    { day: 'Tue', orders: 18 },
    { day: 'Wed', orders: 15 },
    { day: 'Thu', orders: 24 },
    { day: 'Fri', orders: 32 },
    { day: 'Sat', orders: 28 },
    { day: 'Sun', orders: 22 },
];

export const storeActivityData = [
    { name: 'Active', value: 75, fill: '#10b981' }, // emerald-500
    { name: 'Inactive', value: 15, fill: '#ef4444' }, // red-500
    { name: 'New', value: 10, fill: '#3b82f6' }, // blue-500
];

export const storePerformanceData = [
    { id: 'FR', name: 'Fresh Mart Zone 1', zone: 'North Zone', status: 'Active', orders: 145, retention: 98, avgBasket: 450.00, lastActive: '2 days ago' },
    { id: 'CI', name: 'City Grocers', zone: 'East Zone', status: 'Active', orders: 89, retention: 85, avgBasket: 320.50, lastActive: '2 days ago' },
    { id: 'GR', name: 'Green Valley', zone: 'South Zone', status: 'Risk', orders: 12, retention: 45, avgBasket: 150.00, lastActive: '2 days ago' },
    { id: 'ME', name: 'Metro Supplies', zone: 'West Zone', status: 'Active', orders: 230, retention: 99, avgBasket: 890.00, lastActive: '2 days ago' },
    { id: 'CO', name: 'Corner Shop', zone: 'North Zone', status: 'Churned', orders: 0, retention: 10, avgBasket: 0.00, lastActive: '2 days ago' },
];

export const supplierFillRateData = [
    { supplier: 'Sup A', fillRate: 98, stock: 95 },
    { supplier: 'Sup B', fillRate: 85, stock: 78 },
    { supplier: 'Sup C', fillRate: 92, stock: 88 },
    { supplier: 'Sup D', fillRate: 75, stock: 65 },
    { supplier: 'Sup E', fillRate: 99, stock: 98 },
];

export const topSuppliersData = [
    { name: 'Supplier A', onTime: 98 },
    { name: 'Supplier B', onTime: 95 },
    { name: 'Supplier C', onTime: 92 },
    { name: 'Supplier D', onTime: 88 },
    { name: 'Supplier E', onTime: 85 },
];

export const salesAnalyticsData = [
    { month: 'Jan', value: 3000 },
    { month: 'Feb', value: 6500 },
    { month: 'Mar', value: 4500 },
    { month: 'Apr', value: 8000 },
    { month: 'May', value: 12000 },
    { month: 'Jun', value: 5000 },
    { month: 'Jul', value: 4500 },
];

export const userDistributionData = [
    { name: 'Consumers', value: 65, fill: '#38bdf8' }, // sky-400
    { name: 'Suppliers', value: 25, fill: '#cbd5e1' }, // slate-300
];

export const unitEconomicsData = [
    { week: 'Week 1', cost: 32000, margin: 45000 },
    { week: 'Week 2', cost: 33000, margin: 48000 },
    { week: 'Week 3', cost: 36000, margin: 52000 },
    { week: 'Week 4', cost: 35000, margin: 49000 },
];

export const dailyPerformanceLogData = [
    { date: '2023-10-25', totalOrders: 1250, gmv: 45200, platformRev: 4520, activeStores: 158, suppliers: 12, aov: 36.16, fulfillment: 98.5 },
    { date: '2023-10-24', totalOrders: 1180, gmv: 42800, platformRev: 4280, activeStores: 155, suppliers: 12, aov: 36.27, fulfillment: 97.2 },
    { date: '2023-10-23', totalOrders: 1320, gmv: 48500, platformRev: 4850, activeStores: 160, suppliers: 11, aov: 36.74, fulfillment: 96.8 },
    { date: '2023-10-22', totalOrders: 1100, gmv: 39900, platformRev: 3990, activeStores: 152, suppliers: 12, aov: 36.27, fulfillment: 99.1 },
    { date: '2023-10-21', totalOrders: 1450, gmv: 52100, platformRev: 5210, activeStores: 162, suppliers: 12, aov: 35.93, fulfillment: 95.5 },
];
