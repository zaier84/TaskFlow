import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

function NewButton() {
    return (
        <Link
            to="/new-task"
            className="fixed right-0 bottom-0 mr-10 mb-10 flex h-14 w-14 items-center justify-center rounded-xl"
        >
            <button className="flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-blue-400 transition-all duration-300 hover:bg-blue-500">
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </Link>
    );
}

export default NewButton;
