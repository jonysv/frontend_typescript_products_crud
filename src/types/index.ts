import { object, string, number, boolean, Output, array, coerce } from 'valibot'

export const NumberSchema = coerce(number(), Number)
export const AvailabilitySchema = coerce(boolean(), Boolean)

export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()
})
export const ProductsSchema = array(ProductSchema)
export type Product = Output<typeof ProductSchema>
