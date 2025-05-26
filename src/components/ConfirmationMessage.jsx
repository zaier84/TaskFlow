import { createPortal } from "react-dom";
import { useState } from "react";
import Button from "./Button";

function ConfirmationMessage({
    showMessage,
    setShowMessage,
    message,
    handleConfirm,
}) {
    const [confirmed, setConfirmed] = useState(false);
    const onOkClick = (e) => {
        e.preventDefault();
        handleConfirm();
        setShowMessage(false);
    };
    const className = "w-20";

    return createPortal(
        <div
            className={`${showMessage ? "" : "hidden"} fixed inset-0 flex items-center justify-center bg-gray-500/50`}
        >
            <div className="flex h-32 max-w-68 flex-col items-center justify-center gap-3 rounded-lg bg-white p-2">
                <h1 className="font-bold text-red-600">{message}</h1>
                <div className="flex w-full justify-center gap-3">
                    <Button
                        className={className + " bg-gray-400 text-white"}
                        text="Cancel"
                        onClick={() => setShowMessage(false)}
                    />
                    <Button
                        className={
                            className +
                            " border-1 border-red-600 bg-red-600/20 text-red-600"
                        }
                        text="Confirm"
                        onClick={onOkClick}
                    />
                </div>
            </div>
        </div>,
        document.getElementById("modal-root"),
    );
}

export default ConfirmationMessage;
