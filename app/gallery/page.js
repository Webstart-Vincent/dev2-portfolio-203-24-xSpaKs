import Frame from "../../components/Frame";

import blue from "../../assets/blue.jpg";

export const metadata = {
    title: "Contact",
    description: "Portfolio website of Aran Hiblot",
    favicon: "icon.ico",
};

export default function Contact() {
    return (
        <>
            <div className="bg-mainColor min-h-[100vh]">
                <div className="grid grid-cols-2 gap-3 p-3 sm:p-10 sm:gap-5 md:gap-10 md:grid-cols-3 xl:grid-cols-4">
                    <Frame href="" src={blue} alt="Projet 1" width="200px" />
                    <Frame href="" src={blue} alt="Projet 1" width="200px" />
                    <Frame href="" src={blue} alt="Projet 1" width="200px" />
                    <Frame href="" src={blue} alt="Projet 1" width="200px" />
                    <Frame href="" src={blue} alt="Projet 1" width="200px" />
                    <Frame href="" src={blue} alt="Projet 1" width="200px" />
                    <Frame href="" src={blue} alt="Projet 1" width="200px" />
                    <Frame href="" src={blue} alt="Projet 1" width="200px" />
                    <Frame href="" src={blue} alt="Projet 1" width="200px" />
                    <Frame href="" src={blue} alt="Projet 1" width="200px" />
                    <Frame href="" src={blue} alt="Projet 1" width="200px" />
                    <Frame href="" src={blue} alt="Projet 1" width="200px" />
                </div>
            </div>
        </>
    );
}
