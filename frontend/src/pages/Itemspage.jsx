import { Button } from "../components/Button"

export const Itemspage = () => {
    return (
        <div className="page page-itemspage flex flex-col items-center h-dvh">
            {/* NAVBAR */}
            <nav className="w-full flex flex-col items-center border-b-[1px] border-neutral-200">
                <div className="content max-w-5xl min-h-16 p-4 w-full flex justify-between items-center">
                    <h3 className="font-semibold">Storage System</h3>
                    <div className="flex gap-2">
                        {/* SEARCH BAR */}
                        <div className="bg-neutral-100 rounded-lg gap-4 h-12 md:flex hidden">
                            <input
                                type="text"
                                placeholder="książki, dokumenty, ładowarka..."
                                className="w-[300px] outline-none py-2 px-3 "
                            />
                            <button className="cursor-pointer py-2 px-3">Szukaj</button>
                        </div>
                        <span className="block md:hidden">
                            <Button>
                                <i class="bi bi-search"></i>
                            </Button>
                        </span>
                        {/* USTAWIENIA */}
                        <Button>
                            <i className="bi bi-gear-fill"></i>
                        </Button>
                    </div>
                </div>
            </nav>
            {/* CONTENT */}
            <div className="content max-w-5xl w-full flex flex-col gap-4 px-4 items-center justify-center h-full">
                Przedmioty
            </div>
        </div>
    )
}