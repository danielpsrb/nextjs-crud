"use client"

import { useFormState } from "react-dom"
import { saveCustomer } from "@/libs/api-service"
import { CreateCustomerButton } from "@/components/Buttons"

const CreateForm = () => {

    const [state, formAction] = useFormState(saveCustomer, null)

    return (
        <div>
            <form action={formAction}>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-white">Full Name</label>
                    <input type="text" id="name" name="name" autoComplete="name" className="input input-bordered input-primary w-full" />
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-white">Email</label>
                    <input type="text" id="email" name="email" autoComplete="email" className="input input-bordered input-primary w-full" />
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-white">Address</label>
                    <input type="text" id="address" name="address" autoComplete="address" className="input input-bordered input-primary w-full" />
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-white">City</label>
                    <input type="text" id="city" name="city" autoComplete="city" className="input input-bordered input-primary w-full" />
                </div>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-white">Phone Number</label>
                    <input type="text" id="phone" name="phone" autoComplete="phone" className="input input-bordered input-primary w-full" />
                </div>
                <div id="phone-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
                </div>
                <div id="message-error" aria-live="polite" aria-atomic="true">
                    <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                </div>
                <CreateCustomerButton label="save" />
            </form>
        </div>
    )
}

export default CreateForm