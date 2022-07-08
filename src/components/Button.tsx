export function Button(props: { gitHub: string; titulo: string }) {
    return (
        <a
            className="
                bg-white/30
                backdrop-blur-md
                rounded-lg
                px-2
                py-5
                uppercase
                flex
                justify-evenly
                text-xl
            "
            target="_blank"
            rel="noopener noreferrer"
            href={props.gitHub}
        >
            {props.titulo}
        </a>
    );
}
