// COMPONENTS
import { GroupLabel } from "../components/GroupLabel"
import { Navbar } from "../components/Navbar"
// ASSETS
import package_emote from "@/assets/emojis/package_emote.png"

export const Boxespage = () => {
    return (
        <div className="page page-boxespage flex flex-col items-center h-dvh">
            {/* NAVBAR */}
            <Navbar />
            {/* CONTENT */}
            <div className="content max-w-5xl w-full flex flex-col gap-4 p-4 h-full">
                <h1 className="font-semibold text-lg md:text-xl inline-flex items-center gap-1">
                    <img src={package_emote} className="h-4 w-4 md:h-5 md:w-5" alt="" />Pudełka
                </h1>
                <GroupLabel labelTitle={"Wszystkie"} toDisplayInList={[{ name: "Duże pudełko" }, { name: "Szafa" }, { name: "Regał" }]}>
                </GroupLabel>
                <GroupLabel labelTitle={"Pokój #2"} toDisplayInList={[{ name: "Duże pudełko" }, { name: "Duże pudełko" }]}>
                </GroupLabel>
                <GroupLabel labelTitle={"Pokój #2"} toDisplayInList={[]}>
                </GroupLabel>
                <GroupLabel labelTitle={"Pokój #2"}>
                </GroupLabel>
            </div>
        </div>
    )
}