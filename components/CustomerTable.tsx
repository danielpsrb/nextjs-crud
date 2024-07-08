import { getCustomers } from "@/libs/data"
import { formatDate } from "@/libs/utils";
import { EditButton, DeleteButton } from "./Buttons";

const CustomerTable = async () => {

    const customers = await getCustomers();

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead className="text-sm text-gray-700 uppercase bg-gray-300">
                    <tr>
                        <th className="py-3 px-6">#</th>
                        <th className="py-3 px-6">Name</th>
                        <th className="py-3 px-6 text-center">Email</th>
                        <th className="py-3 px-8">Address</th>
                        <th className="py-3 px-8">City</th>
                        <th className="py-3 px-6">Phone Number</th>
                        <th className="py-3 px-6">Created at</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer, index) => (
                        <tr key={customer.id}>
                            <td className="py-3 px-6">{index + 1}</td>
                            <td className="py-3 px-6">{customer.name}</td>
                            <td className="py-3 px-6">{customer.email}</td>
                            <td className="py-3 px-6">{customer.address}</td>
                            <td className="py-3 px-6">{customer.city}</td>
                            <td className="py-3 px-6">{customer.phone}</td>
                            <td className="py-3 px-6">
                                {formatDate(customer.createdAt.toString())}
                            </td>
                            <td className="flex justify-center gap-2 py-5">
                                <EditButton id={customer.id} />
                                <DeleteButton id={customer.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    )
}

export default CustomerTable;