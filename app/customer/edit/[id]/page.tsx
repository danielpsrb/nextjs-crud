import UpdateForm from "@/components/EditForm";
import { getCustomerDataById } from "@/libs/data";
import NotFound from "@/app/not-found";

const EditCustomerPage = async({ params }: { params: { id: string } }) => {

    const id = params.id;
    const customerData = await getCustomerDataById(id);

    if (!customerData) {
        return <NotFound />
    }

    return (
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Update Customer Data</h1>
            <UpdateForm customer={customerData} />
        </div>
    );
}

export default EditCustomerPage;