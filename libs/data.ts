import { prisma } from "./prisma";

export const getCustomers = async () => {
    try {
        const customers = await prisma.guest.findMany();
        return customers;
    } catch (error) {
        throw new Error("Failed to fetch customers data");
    }
}