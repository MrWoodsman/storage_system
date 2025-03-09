export const Button = ({ children, isSquare, clickAction, small }) => {
    let defaultClass = ''

    small ? defaultClass = 'p-2 text-sm font-medium' : defaultClass = 'p-4 h-12'

    return (
        <button
            onClick={clickAction}
            className={`${defaultClass} bg-neutral-100 hover:bg-neutral-200 border-[1px] border-neutral-200 cursor-pointer  ${isSquare ? "w-12" : "min-w-12"} rounded-lg flex items-center justify-center`}
        >
            {children}
        </button>
    )
}