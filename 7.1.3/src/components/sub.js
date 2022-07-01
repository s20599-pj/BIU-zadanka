import {useParams} from "react-router-dom";

export default function Substract() {
    const {a, b} = useParams()

    return(
        <p>Wynik odejmowania: {parseInt(a)-parseInt(b)}</p>
    )
}