"use client"

import { useRouter } from "next/navigation";
import { TiWarning } from "react-icons/ti";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <TiWarning size={80} className="text-red-500" />
                <h3 className="text-color-red text-4xl font-bold">404 | NOT FOUND</h3>
                <button onClick={() => router.back()} className="text-color-primary hover:text-color-orange transition-all underline">Go Back</button>
            </div>
        </div>
    )
}