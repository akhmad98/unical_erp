export interface IPermanentFields {
    supplier_id: string,
    warehouse_id: string,
    receipt_date: Date,
    currency: number,
    product_id: string,
    quantity: number,
    unit_price: number,
    expiration_date?: Date | null
    lot_code?: number | null
    serial_numbers?: Array<number> | null
}