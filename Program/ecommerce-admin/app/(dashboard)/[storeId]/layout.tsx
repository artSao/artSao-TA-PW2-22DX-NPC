import db from "@/lib/db";
// import {  } from "@clerk/nextjs/";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
    params,
}: {
        children: React.ReactNode;
        params: { storeId: string };
    
    }) {
    const { userId } = auth();
    if (!userId) {
        redirect("sign-in")
    }
    const store = await db.store.findFirst({
        where: {
            id: params.storeId,
            userId: userId
        }
    })

    if (!store) {
        redirect("/")
    }

    return (
        <>
            <div>
                This is Navbar</div>
            {children}
        </>
    )
}
