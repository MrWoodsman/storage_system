// REACT
import { useEffect, useState } from "react";
// COMPONENTS
import { Button } from "../components/Button"
import { Navbar } from "../components/Navbar"
import { GroupLabel } from "../components/GroupLabel";

export const Itemspage = () => {
    const [itemsData, setItemsData] = useState()

    useEffect(() => {
        fetch('/api/items')
            .then(response => response.json())
            .then(data => setItemsData(data))
            .catch(error => console.error(error));
    }, [])

    return (
        <div className="page page-itemspage flex flex-col items-center h-dvh">
            {/* NAVBAR */}
            <Navbar />
            {/* CONTENT */}
            <div className="content max-w-5xl w-full flex flex-col gap-4 p-4 h-full">
                {
                    <GroupLabel labelTitle={"Wszystkie"} toDisplayInList={itemsData} />
                }
            </div>
        </div>
    )
}