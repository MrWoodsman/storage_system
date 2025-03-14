import { useState } from "react";

export const GroupLabel = ({ labelTitle, toDisplayInList }) => {
    const [isFolded, setIsFolded] = useState(false)

    // DEV
    // useEffect(() => {
    //     console.log(isFolded);
    // }, [isFolded])

    return (
        <h2 className="font-semibold text-base md:text-lg flex flex-col gap-2">
            {/* LABEL */}
            <div
                className="flex justify-between items-center cursor-pointer border-b-[1px] border-neutral-300"
                onClick={() => setIsFolded(!isFolded)}
            >
                {labelTitle}

                <button className="w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer">
                    {isFolded ? <i className="bi bi-caret-up-fill"></i> : <i className="bi bi-caret-down-fill"></i>}
                </button>
            </div>
            {/* CHILDREN LIST */}
            {
                !isFolded && (
                    <div className="flex flex-col gap-2">
                        {
                            toDisplayInList && toDisplayInList.length > 0 ? (
                                toDisplayInList.map((item, index) => (
                                    <ListItem key={index} name={item.name ?? "Brak nazwy"} />
                                ))
                            ) : (
                                <ListItem name={"Jakoś tu pusto!"} centerText disabled />
                            )
                        }
                    </div>
                )
            }
        </h2 >
    )
}

const ListItem = ({ name, centerText, disabled }) => {
    const statusClass = disabled ? "bg-neutral-100/50 border-neutral-200/50 text-black/50" : "bg-neutral-100 border-neutral-200"

    return (
        <div className={`${statusClass} cursor-pointer border-[1px] rounded-lg p-4 text-base font-normal  ${centerText && "text-center"}`}>
            {name}
        </div>
    )
}