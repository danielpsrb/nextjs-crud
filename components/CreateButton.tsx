import Link from "next/link"
import { IoAddSharp } from "react-icons/io5"

export const CreateButton = () => {
    return (
        <Link href="/customer/create" className="inline-flex items-center space-x-1 text-gray-100 bg-blue-700 m-2 px-5 py-[9px] rounded-md text-sm">
            <IoAddSharp size={20} />
            Create
        </Link>
    )
}