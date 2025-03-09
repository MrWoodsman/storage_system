import { useNavigate } from "react-router-dom";
import { PATHS } from "../router/paths";
// COMPONENTS
import { Button } from "../components/Button"
import { Navbar } from "../components/Navbar";


export const Homepage = () => {
    const navigate = useNavigate()

    return (
        <div className="page page-homepage flex flex-col items-center h-dvh">
            {/* NAVBAR */}
            <Navbar />
            {/* CONTENT */}
            <div className="content max-w-5xl w-full flex flex-col gap-4 px-4 items-center justify-center h-full">
                {/* <h1 className="text-9xl">📦</h1> */}
                <img className="w-[128px]" src="https://em-content.zobj.net/source/apple/391/package_1f4e6.png" />
                <h1 className="text-4xl md:text-6xl font-bold text-center text-balance">Twój wirtualny magazyn</h1>
                <h2 className="text-center text-balance">Zarządzaj swoim domowym magazynem i nie tylko</h2>
                <div className="flex gap-4 flex-wrap justify-center">
                    {/* <Button>Ustawienia</Button> */}
                    <Button clickAction={() => navigate(PATHS.BOXES)}>Pudełka</Button>
                    <Button clickAction={() => navigate(PATHS.ITEMS)}>Przedmioty</Button>
                </div>
            </div>
        </div>
    )
}