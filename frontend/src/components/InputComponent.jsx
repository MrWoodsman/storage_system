export const InputComponent = ({ InputLabel, Placeholder }) => {
    return (
        <div className="flex flex-col">
            <label
                className="px-2 text-base font-medium"
                htmlFor=""
            >{InputLabel ?? "Brak nazwy"}</label>
            <input
                placeholder={Placeholder}
                className="border-[1px] border-neutral-400 p-2 rounded-lg"
                type="text"
                name=""
                id=""
            />
        </div>
    )
}