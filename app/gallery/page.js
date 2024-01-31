import Frame from "../../components/Frame";
import Head from "next/head";

import blue from "../../assets/blue.jpg";

export const metadata = {
    title: "Gallery",
    description: "Portfolio website of Aran Hiblot",
};

export default function Gallery() {
    return (
        <>
            <Head>
                <title>Gallery</title>
            </Head>
            <div className="bg-slate-950 h-[100vh]">
                <div className="grid grid-cols-4 p-3">
                    <Frame href="" src={blue} alt="Projet 3" width="300px" />
                    <Frame href="" src={blue} alt="Projet 3" width="300px" />
                    <Frame href="" src={blue} alt="Projet 3" width="300px" />
                </div>
            </div>
        </>
    );
}
