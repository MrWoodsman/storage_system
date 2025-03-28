// COMPONENTS
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { GroupLabel } from "../components/GroupLabel"
import { Navbar } from "../components/Navbar"
// ASSETS
import package_emote from "@/assets/emojis/package_emote.png"
import { Button } from "../components/Button"

export const Boxespage = () => {
    const navigate = useNavigate()

    const [locationsData, setLocationsData] = useState([])
    const [boxesData, setBoxesData] = useState([])

    useEffect(() => {
        fetch('/api/boxes')
            .then(response => response.json())
            .then(data => setBoxesData(data))
            .catch(error => console.error(error));

        fetch('/api/locations')
            .then(response => response.json())
            .then(data => setLocationsData(data))
            .catch(error => console.error(error));
    }, [])

    return (
        <div className="page page-boxespage flex flex-col items-center h-full overflow-y-auto">
            {/* NAVBAR */}
            <Navbar />
            {/* CONTENT */}
            <div className="content max-w-5xl w-full flex flex-col gap-4 p-4 h-full">
                <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-lg md:text-xl inline-flex items-center gap-1">
                        <img src={package_emote} className="h-4 w-4 md:h-5 md:w-5" alt="" />Pudełka
                    </h1>
                    <Button small clickAction={() => navigate('/box/add')}>Dodaj pudełko</Button>
                </div>
                <GroupLabel labelTitle={"Nie przypisane"} toDisplayInList={boxesData.filter((box) => !box.locationId)} />
                {
                    locationsData.map((location, index) => (
                        <GroupLabel key={`box_${index}`} labelTitle={location.name} toDisplayInList={boxesData.filter((box) => box.locationId == location.id)} />
                    ))
                }
            </div>
        </div>
    )
}