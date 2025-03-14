// COMPONENTS
import { InputComponent } from "../InputComponent"

export const PopupNewBox = () => {
    const isMobile = true

    const variableClassParent = isMobile ? "flex-col-reverse" : "flex-row-reverse"
    const variableClassChildren = isMobile ? "" : "max-w-[450px]"

    return (
        <div className={`${variableClassParent} popup absolute left-0 bottom-0 w-full h-full bg-black/50 flex backdrop-blur-[2px]`}>
            <div className={`${variableClassChildren} main-element bg-neutral-50 p-4 flex flex-col gap-4`}>
                <div className="header">
                    <h1 className="font-semibold text-2xl">Dodawanie pudełka</h1>
                    <h2 className="font-normal text-base">Utrórz nowe pudełko uzupełniając informacje o nim.</h2>
                </div>
                <div className="input-wrap flex flex-col gap-2">
                    <InputComponent InputLabel={"Nazwa"} />
                    <InputComponent InputLabel={"Id"} disabled value={'6712-6727-9127-1288'} />
                    <InputComponent InputLabel={"Lokalizacja"} />
                </div>
                <div className="qr-code-wrap flex justify-center">
                    <img className="max-w-[300px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="" />
                </div>
            </div>
        </div>
    )
}