import { getCustomers } from "@/libs/data"
import { formatDate } from "@/libs/utils";

const ContactTable = async () => {

    const customers = await getCustomers();

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead className="text-sm text-gray-700 uppercase bg-gray-300">
                    <tr>
                        <th className="py-3 px-6">#</th>
                        <th className="py-3 px-6">Name</th>
                        <th className="py-3 px-6">Email</th>
                        <th className="py-3 px-6">Address</th>
                        <th className="py-3 px-6">City</th>
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
                            <td className="py-3 px-6 text-center">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    )
}

export default ContactTable