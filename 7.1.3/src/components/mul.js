import {useParams} from "react-router-dom";

export default function Multiply() {
    const {a, b} = useParams();

    return(
        <p>Wynik mnożenia: {parseInt(a)*parseInt(b)}</p>
    )
}