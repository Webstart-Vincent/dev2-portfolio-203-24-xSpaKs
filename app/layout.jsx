"use client";

import "./globals.css";
import Provider from "../components/provider";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
    return (
        <html lang="fr-FR">
            <body>
                <Provider>
                    <Navbar />
                    {children}
                </Provider>
            </body>
        </html>
    );
}
