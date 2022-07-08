export function Header() {
    return (
        <div
            className="
                flex 
                flex-col-reverse
                items-center 
                w-11/12 
                py-8 
                mx-auto 
                sm:justify-evenly
                sm:flex-row "
        >
            <div>
                <h2 className="my-4 text-3xl sm:text-5xl">
                    Arlindo da Silva Kohls
                </h2>
                <span className="text-gray-300">Portfólio</span>
            </div>
            <div className="top-0 left-0 z-[-1] blur-[150px] absolute w-56 h-56 bg-teal-400"></div>
            <div className="top-60 right-0 z-[-1]  absolute w-40 h-40 bg-purple-700 blur-[130px]"></div>

            <img
                className="w-72 border rounded-[140px]"
                src="./src/img/selfie.png"
                alt=""
            />
        </div>
    );
}
