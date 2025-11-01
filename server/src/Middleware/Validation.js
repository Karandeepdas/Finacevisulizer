import * as z from "zod";

export const UserSchema=z.object({
    name: z.string({message:"wrong username"}),
    email:z.string().email({message:"invalid email-id"}),
    password:z.string().min(4,{message:"Atleast 4 character are required"})
})
export const ListSchema=z.object({
    title: z.string().min(2,{message:"invalid item name"}),
    price: z.coerce.number().min(1,{message:"invalid price"}),
    date: z.string().datetime().optional()
})