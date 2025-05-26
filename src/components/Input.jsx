import React from "react";

function Input({ type, value, onChange, placeholder }) {
    return (
        <input
            type={type}
            className="rounded-lg border-2 border-gray-300 p-2"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default Input;
