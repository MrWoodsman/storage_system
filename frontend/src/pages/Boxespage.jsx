// COMPONENTS
import { Button } from "../components/Button"
import { Navbar } from "../components/Navbar"

export const Boxespage = () => {
    return (
        <div className="page page-boxespage flex flex-col items-center h-dvh">
            {/* NAVBAR */}
            <Navbar />
            {/* CONTENT */}
            <div className="content max-w-5xl w-full flex flex-col gap-4 px-4 items-center justify-center h-full">
                Pudełka
            </div>
        </div>
    )
}