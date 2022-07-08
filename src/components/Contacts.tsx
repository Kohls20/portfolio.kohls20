import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "phosphor-react";

export function Contacts() {
    return (
        <div className="flex flex-col items-center bg-teal-700">
            <h1 className="text-3xl my-5">Contatos</h1>
            <hr className="w-4/5 border-gray-400" />
            <address
                className="
                        flex 
                        
                        min-h-max
                        w-full 
                    "
            >
                <div
                    className="
                            flex 
                            flex-col
                            mx-auto
                            w-4/5

                            filhos
                            "
                >
                    <a
                        href="mailto:a.s.kohls.21@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <EnvelopeSimple
                            size={32}
                            color="#fcfcfc"
                            weight="fill"
                        />
                        a.s.kohls.21@gmail.com
                    </a>
                    <a
                        href="https://www.linkedin.com/in/arlindo-da-silva-kohls-7795971a3/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedinLogo size={32} color="#fcfcfc" weight="fill" />
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Kohls20"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubLogo size={32} color="#fcfcfc" weight="fill" />
                        GitHub
                    </a>
                </div>
            </address>
        </div>
    );
}
