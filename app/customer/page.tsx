import CustomerTable from "@/components/CustomerTable"
import Search from "@/components/Search"
import { CreateButton } from "@/components/CreateButton"

const Contacts = () => {
    return (
        <div className="max-w-screen-md mx-auto mt-5">
            <div className="flex items-center justify-center gap-1 mb-5">
                <Search />
                <CreateButton />
            </div>
            <CustomerTable />
        </div>
    )
}

export default Contacts