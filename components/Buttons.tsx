"use client"
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md";
import clsx from "clsx";

export const EditButton = () => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded-sm" title="Edit">
            <FaEdit size={20} />
        </button>
    )
}

export const DeleteButton = () => {
    return (
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded-sm" title="Delete">
            <MdDelete size={20} />
        </button>
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
                <span>{pending ? "Saving..." : "Submit"}</span>
            ) : (
            <span>{pending ? "Updating..." : "Update"}</span>
        )}
        </button>
    )
};