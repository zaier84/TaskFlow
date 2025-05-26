import React from "react";

function Select({ value, onChange, children }) {
    return (
        <select
            className="rounded-lg border-2 border-gray-300 p-2"
            value={value}
            onChange={onChange}
        >
            {children}
        </select>
    );
}

export default Select;
