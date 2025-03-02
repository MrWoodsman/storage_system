import { useRouteError } from "react-router-dom";
// COMPONENTS
import { Navbar } from "../components/Navbar"

export const Errorpage = () => {
    const error = useRouteError()
    console.error(error)

    return (
        <div className="page page-errorpage flex flex-col items-center h-dvh">
            <Navbar />
            <div className="content max-w-5xl w-full flex flex-col gap-4 px-4 items-center justify-center h-full">
                <h1 className="text-3xl font-bold">Oops!</h1>
                <p>Sorry, an unexpected error hac occurred.</p>
                <p className="text-neutral-500">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}