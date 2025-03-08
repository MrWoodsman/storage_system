// COMPONENTS
import { Navbar } from "../components/Navbar"
// ASSETS

export const Settingspage = () => {
    return (
        <div className="page page-boxespage flex flex-col items-center h-dvh">
            {/* NAVBAR */}
            <Navbar />
            {/* CONTENT */}
            <div className="content max-w-5xl w-full flex flex-col gap-4 p-4 h-full">
                <h1 className="font-semibold text-xl md:text-2xl inline-flex items-center gap-1">
                    Ustawienia
                </h1>
                <SettignsLabel LabelText={"Ogólne"} />
                <PropertyLabel PropertyName={"Język"} />
                <PropertyLabel PropertyName={"Język"} />
                <PropertyLabel PropertyName={"Język"} />
                <PropertyLabel PropertyName={"Język"} />
                <SettignsLabel LabelText={"Sieci"} />
                <PropertyLabel PropertyName={"Port"} />
                <SettignsLabel LabelText={"Ustawienia podstawowe"} />
                <PropertyLabel PropertyName={"Rodzaj kodu QR"} />
            </div>
        </div>
    )
}

const SettignsLabel = ({ LabelText }) => {
    return (
        <div className="border-b-[1px] border-neutral-300 p-2">
            <h2 className="font-semibold text-base">{LabelText}</h2>
        </div>
    )
}

const PropertyLabel = ({ PropertyName }) => {
    return (
        <div className="p-2">
            <h3 className="font-normal text-base">{PropertyName}</h3>
        </div>
    )
}