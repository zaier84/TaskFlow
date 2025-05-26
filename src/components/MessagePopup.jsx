import { createPortal } from "react-dom";

function MessagePopup({ showPopup, setShowPopup, message }) {
    const onOkClick = (e) => {
        e.preventDefault();
        setShowPopup(false);
    };

    return createPortal(
        <div
            className={`${showPopup ? "" : "hidden"} fixed inset-0 flex items-center justify-center bg-gray-500/50`}
        >
            <div className="flex h-30 max-w-64 flex-col items-center gap-3 rounded-lg bg-white p-2">
                <h1 className="font-bold">{message}</h1>
                <button
                    className="flex h-10 w-12 items-center justify-center rounded-lg bg-blue-500 font-bold text-white hover:cursor-pointer"
                    onClick={onOkClick}
                >
                    OK
                </button>
            </div>
        </div>,
        document.getElementById("modal-root"),
    );
}

export default MessagePopup;
