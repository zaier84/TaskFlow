import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useMatches } from "react-router";

function Header() {
    const matches = useMatches();

    const current = matches.reverse().find((match) => match.handle?.title);
    const title = current?.handle?.title || "Dashboard";
    return (
        <div className="flex h-[20%] items-center justify-between px-10">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <div>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </div>
    );
}

export default Header;
