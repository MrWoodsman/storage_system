export const InputComponent = ({ InputLabel, Placeholder, disabled, value }) => {
    return (
        <div className="flex flex-col">
            <label
                className={`px-2 select-none text-base font-medium ${disabled ? "text-neutral-500" : "text-neutral-950"}`}
                htmlFor=""
            >{InputLabel ?? "Brak nazwy"}</label>
            <div className={`flex border-[1px] border-neutral-400 rounded-lg ${disabled && "bg-neutral-200"}`}>
                <input
                    placeholder={Placeholder}
                    disabled={disabled}
                    value={value}
                    className={`w-full p-2 rounded-lg outline-none focus:border-blue-500`}
                    type="text"
                    name=""
                    id=""
                />
                <button className="h-full aspect-square flex items-center justify-center cursor-pointer">
                    <i className="bi bi-three-dots"></i>
                </button>
            </div>
        </div>
    )
}

//DEFAULT 
{/* <div className="flex flex-col">
<label
    className={`px-2 select-none text-base font-medium ${disabled ? "text-neutral-500" : "text-neutral-950"}`}
    htmlFor=""
>{InputLabel ?? "Brak nazwy"}</label>
<input
    placeholder={Placeholder}
    disabled={disabled}
    value={value}
    className={`border-[1px] border-neutral-400 p-2 rounded-lg outline-none focus:border-blue-500 ${disabled && "bg-neutral-200"}`}
    type="text"
    name=""
    id=""
/>
</div> */}