"use client"
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md";
import clsx from "clsx";
import { deleteCustomer } from "@/libs/api-service";


export const EditButton = ({ id }: { id: string }) => { 
    return (
        <Link href={`/customer/edit/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded-sm" title="Edit">
            <FaEdit size={20} />
        </Link>
    )
}

export const DeleteButton = ({ id }: { id: string }) => {

    const DeletedCustomerWithId = deleteCustomer.bind(null, id);

    return (
        <form onSubmit={DeletedCustomerWithId}>
            <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded-sm" title="Delete">
                <MdDelete size={20} />
            </button>
        </form>
    )
}

export const CreateCustomerButton = ({ label }: { label: string }) => {
    const { pending } = useFormStatus();

    const styled = clsx(
        "btn btn-accent w-full text-white",
        {
            "opacity-50 cursor-progress": pending,
        }
    )

    return (
        <button type="submit" className={styled} disabled={pending}>
            {label === "save" ? (
                <span>{pending ? "Saving..." : "Save"}</span>
            ) : (
            <span>{pending ? "Updating..." : "Update"}</span>
        )}
        </button>
    )
};