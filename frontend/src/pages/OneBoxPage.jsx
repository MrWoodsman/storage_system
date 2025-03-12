// COMPONENTS
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
// COMPONENTS
import { Navbar } from "../components/Navbar"

export const OneBoxPage = () => {
    const { id } = useParams(); // Pobierz ID z URL
    const [boxData, setBoxData] = useState(null)

    useEffect(() => {
        if (!id) {
            setBoxData(null)
            return
        }

        fetch(`/api/boxes/${id}`)
            .then(response => response.json())
            .then(data => setBoxData(data))
            .catch(error => console.error(error));
    }, [id])

    return (
        <div className="page page-oneboxpage flex flex-col items-center h-dvh">
            {/* NAVBAR */}
            <Navbar />
            {/* CONTENT */}
            <div className="content max-w-5xl w-full flex flex-col gap-4 p-4 h-full">
                {boxData ? (
                    <DisplayBoxData data={boxData} />
                ) : (
                    <NoDataAboutBox idToDisplay={id} />
                )}
            </div>
        </div>
    )
}

const DisplayBoxData = ({ data }) => {
    return (
        <div>
            <h1 className="font-semibold text-xl">{data.name}</h1>
            <h1 className="font-normal text-base">W pudełku jest <b>52</b> przedmioty</h1>
        </div>
    )
}

const NoDataAboutBox = ({ idToDisplay }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="font-semibold text-2xl">Brak informacji</h1>
            {idToDisplay ? (
                <h3>Nie znaleziono żadnych informacji o pudełku o id: {idToDisplay}</h3>
            ) : (
                <h3>Nie znaleziono żadnych informacji o pudełku z powodu braku id</h3>
            )}
        </div>)
}