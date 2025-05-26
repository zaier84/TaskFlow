function Button({ text, onClick, className = "" }) {
    return (
        <button
            className={`flex h-10 w-12 items-center justify-center rounded-lg bg-blue-500 font-bold hover:cursor-pointer ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
