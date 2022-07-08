import { Project } from "./components/Project";
import { Header } from "./components/Header";
import { Contacts } from "./components/Contacts";

function App() {
    return (
        <div>
            <Header />

            <Project />

            <Contacts />

            <footer
                className="
                    flex 
                    flex-col 
                    w-full 
                "
            >
                <span className=" relative bottom-0 bg-black w-full p-4 text-center text-base">
                    Desenvolvido por <strong>&copy; Arlindo da S. Kohls</strong>
                </span>
            </footer>
        </div>
    );
}

export default App;
