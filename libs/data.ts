import { prisma } from "./prisma";

export const getCustomers = async () => {
    try {
        const customers = await prisma.guest.findMany();
        return customers;
    } catch (error) {
        throw new Error("Failed to fetch customers data");
    }
}

export const getCustomerDataById = async (id: string) => {
    try {
        const customer = await prisma.guest.findUnique({
            where: {
                id: id
            }
        });
        return customer;
    } catch (error) {
        throw new Error("Failed to fetch customer data");
    }
}

export const getCustomerPages = async (query: string) => {
    try {
        const customers = await prisma.guest.count({
            where: {
                OR: [
                    {
                        name: {
                            contains: query,
                        }
                        
                    }
                ]
            }
        })
    } catch (e) {
        
    }
}