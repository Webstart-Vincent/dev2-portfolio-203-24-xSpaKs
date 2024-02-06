"use client";
import { useSession } from "next-auth/react";

const Dashboard = () => {
    const { data: session, status } = useSession();
    return (
        <>
            <h1>Tableau de bord</h1>
            <p>Utilisateur : {session?.user.name ?? "Pas de session"}</p>
        </>
    );
};

export default Dashboard;
