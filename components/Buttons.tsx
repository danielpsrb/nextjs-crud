import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md";


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