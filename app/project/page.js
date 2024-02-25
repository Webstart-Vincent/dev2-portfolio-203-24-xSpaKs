import Link from "next/link";
import Image from "next/image";
import blue from "/assets/blue.jpg";
import php from "/assets/php.svg";
import js from "/assets/js.svg";
import react from "/assets/react.svg";
import python from "/assets/python.svg";
import github from "/assets/github.svg";
import netlify from "/assets/netlify.svg";

export const metadata = {
    title: "Name of the project",
    description: "Portfolio website of Aran Hiblot",
    favicon: "icon.ico",
};

export default function Home() {
    return (
        <>
            <div className="bg-mainColor min-h-[100vh] p-5 sm:p-10">
                <div className="sm:flex justify-center gap-[40px]">
                    <Image
                        src={blue}
                        alt={"Nom du projet"}
                        className="m-auto sm:m-0"
                        width={350}
                    />
                    <div className="max-w-[600px] pt-[15px] sm:pt-0">
                        <h1 className="font-mono text-secondaryColor text-center sm:text-start text-2xl">
                            Nom du projet
                        </h1>

                        <div className="flex gap-[10px] pt-[8px] justify-center sm:justify-start">
                            <Image src={js} alt="Icone JS" width={20} />
                            <Image src={php} alt="Icone PHP" width={20} />
                            <Image src={react} alt="Icone React" width={20} />
                            <Image src={python} alt="Icone Python" width={20} />
                        </div>

                        <div className="mono-font flex gap-[20px] pt-[8px] justify-center sm:justify-start">
                            <Link
                                className="font-mono flex gap-2 text-secondaryColor hover:text-detailsColor transition:color duration-300"
                                href={""}
                            >
                                <Image
                                    src={github}
                                    alt="Icône Github"
                                    width={35}
                                />
                                <span className="pt-[6px]">Github</span>
                            </Link>
                            <Link
                                className="font-mono flex gap-2 text-secondaryColor hover:text-detailsColor transition-color duration-300"
                                href={""}
                            >
                                <Image
                                    src={netlify}
                                    alt="Icône Netlify"
                                    width={32}
                                />
                                <span className="pt-[6px]">Netlify</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="font-mono m-auto text-secondaryColor pt-[30px] max-w-[1000px]">
                    Notre projet fictif vise à explorer de nouvelles frontières
                    dans le domaine de la réalité augmentée (RA) et de la
                    réalité virtuelle (RV). En combinant ces deux technologies
                    de pointe, nous cherchons à créer une expérience immersive
                    révolutionnaire qui repousse les limites de la narration
                    interactive.
                </p>
                <p className="font-mono m-auto text-secondaryColor pt-[30px] max-w-[1000px]">
                    Dans un monde en constante évolution où la technologie joue
                    un rôle de plus en plus important dans notre quotidien, il
                    est essentiel dexplorer de nouvelles façons dinteragir avec
                    notre environnement numérique. La RA et la RV offrent un
                    potentiel énorme pour transformer la manière dont nous
                    percevons et interagissons avec le monde qui nous entoure.
                </p>
                <p className="font-mono m-auto text-secondaryColor pt-[30px] max-w-[1000px]">
                    Notre objectif principal est de développer une plateforme de
                    RA/RV polyvalente et conviviale qui puisse être utilisée
                    dans une variété de contextes, allant du divertissement à
                    léducation en passant par la formation professionnelle. Nous
                    visons également à créer un écosystème robuste dapplications
                    et de contenus pour soutenir cette plateforme et à établir
                    des partenariats stratégiques avec des développeurs, des
                    créateurs de contenu et des entreprises pour stimuler
                    ladoption et la croissance de notre solution.
                </p>
            </div>
        </>
    );
}
