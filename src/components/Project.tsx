import { gql, useQuery } from "@apollo/client";

import { Button } from "./Button";

const GET_PROJECT_QUERY = gql`
    query {
        projetos {
            id
            titulo
            descricao
            gitHub
            image
        }
    }
`;

interface projeto {
    id: string;
    titulo: string;
    descricao: string;
    gitHub: string;
    image: string;
}

export function Project() {
    const { data } = useQuery<{ projetos: projeto[] }>(GET_PROJECT_QUERY);

    return (
        <div
            id="scroll"
            className="
                flex 
                flex-nowrap 
                overflow-x-scroll 
                scroll-smooth 
                mb-8 
                w-11/12 
                rounded-2xl 
                m-auto
            "
        >
            {data?.projetos.map((projeto) => {
                return (
                    <div
                        className="
                        flex-none 
                        w-auto
                        mr-4
                        mb-4
                        sm:m-10"
                    >
                        <div
                            className="
                                w-[300px]
                                h-[650px]
                                p-5
                                flex
                                flex-col
                                justify-between
                                text-center
                                rounded-[15px]
                                bg-gradient-to-br 
                                from-teal-400 to-transparent

                                sm:h-[600px]
                                sm:w-[480px]
                            "
                            key={projeto.id}
                        >
                            <div>
                                <img
                                    className="
                                        rounded-lg
                                        w-full
                                        "
                                    src={projeto.image}
                                    alt="image host"
                                />
                            </div>
                            <hr className="w-full" />
                            <h2 className="font-bold text-3xl">
                                {projeto.titulo}
                            </h2>
                            <hr className="w-full" />
                            <p className="text-gray-300">{projeto.descricao}</p>
                            <Button
                                titulo="Link para o GitHub"
                                gitHub={projeto.gitHub}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
