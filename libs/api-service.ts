"use server";

import { z } from 'zod';
import { prisma } from './prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const CustomerSchema = z.object({
    name: z.string().min(5),
    email: z.string().email(),
    address: z.string(),
    city: z.string(),
    phone: z.string().min(11),
})

export const saveCustomer = async (prevSate: any, formData: FormData) => {
    const validatedFields = CustomerSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if(!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        await prisma.guest.create({
            data: {
                name: validatedFields.data.name,
                email: validatedFields.data.email,
                address: validatedFields.data.address,
                city: validatedFields.data.city,
                phone: validatedFields.data.phone,
            },
        });
    } catch (error) {
        return {message: "Failed to save customer data. Please try again later."}
    }
    revalidatePath("/customer");
    redirect("/customer");
};