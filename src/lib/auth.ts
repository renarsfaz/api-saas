import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function mustBeLoggedIn() {
    const session = await getServerSession(authOptions);

    if (session) {
        console.log("User is logged in!");
    } else {
        redirect("/api/auth/signin");
    }

}