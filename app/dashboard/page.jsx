"use client";
import { useSession } from "next-auth/react";

export const metadata = {
    title: "Contact",
    description: "Portfolio website of Aran Hiblot",
    favicon: "icon.ico",
};

const Dashboard = () => {
    const { data: session, status } = useSession();
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href={metadata.favicon} />
            </Head>
            <h1>Tableau de bord</h1>
            <p>Utilisateur : {session?.user.name ?? "Pas de session"}</p>
        </>
    );
};

export default Dashboard;
