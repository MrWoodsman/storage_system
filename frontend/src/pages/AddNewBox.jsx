// COMPONENTS
import { Navbar } from "../components/Navbar"
import { InputComponent } from "../components/InputComponent"
import { useEffect, useState } from "react"

// QRCode
import QRCode from "qrcode";

export const AddNewBoxPage = () => {
    const [locationsData, setLocationsData] = useState([])
    const [boxData, setBoxData] = useState({
        name: "",
        description: "",
        location_id: "",
        id: "7127-1787-8127-2718"
    })
    const [qrUrl, setQrUrl] = useState("")

    useEffect(() => {
        // Pobieranie dostępnych lokalizacji
        fetch('/api/locations')
            .then(response => response.json())
            .then(data => setLocationsData(data))
            .catch(error => console.error(error));

        // Wczytywanie id które otrzyma pudełko
        fetch('/api/locations')
            .then(response => response.json())
            .then(data => setLocationsData(data))
            .catch(error => console.error(error));
    }, [])

    useEffect(() => {
        QRCode.toDataURL(`http://192.168.0.157:1001/box/${boxData.id}`, { width: 500, margin: 0 }, (err, url) => {
            if (err) {
                console.error("Błąd generowania QR:", err);
            } else {
                // console.log("QR URL wygenerowany:", url);
                setQrUrl(url); // Ustawienie URL w stanie
            }
        });
    }, [boxData.id])

    return (
        <div className="page page-addnewbox flex flex-col items-center max-h-full">
            <Navbar customText={"Dodawanie pudełka"} />
            <div className="content max-w-5xl w-full flex flex-col gap-4 p-4">
                <p>Dodaj nowe pudełko podając informacje o nim takie jak nazwa, opis oraz lokalizacja.</p>
                <div className="input-wrap flex flex-col gap-2">
                    <InputComponent InputLabel={"Nazwa"} />
                    <InputComponent InputLabel={"Opis"} />
                    <InputComponent InputLabel={"Lokalizacja"} options={locationsData} />
                </div>
                {
                    qrUrl && (
                        <div className="flex flex-col items-center">
                            <img
                                src={qrUrl}
                                alt="Kod QR"
                                className="w-full aspect-square p-4"
                            />
                            <h2 className="font-medium">{boxData.id}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    )
}