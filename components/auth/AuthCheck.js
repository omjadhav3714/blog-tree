import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../services/context";

export default function AuthCheck(props) {
    const { username } = useContext(UserContext);

    return username ?
        props.children :
        props.fallback || <Link href="/login">You must be logged in</Link>;
}