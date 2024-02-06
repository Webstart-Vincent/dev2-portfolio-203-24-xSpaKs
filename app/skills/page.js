import Head from "next/head";

export const metadata = {
    title: "Contact",
    description: "Portfolio website of Aran Hiblot",
    favicon: "icon.ico",
};

export default function Skills() {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href={metadata.favicon} />
            </Head>
            <div className="bg-mainColor min-h-[100vh]"></div>
        </>
    );
}
