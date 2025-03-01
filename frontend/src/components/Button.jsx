export const Button = ({ children, isSquare }) => {
    return (
        <button className={`bg-neutral-100 hover:bg-neutral-200 cursor-pointer h-12 ${isSquare ? "w-12" : "min-w-12"} p-4 rounded-lg flex items-center justify-center`}>
            {children}
        </button>
    )
}