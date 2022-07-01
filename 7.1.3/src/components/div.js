import {useParams} from "react-router-dom";

export default function Divide() {
    const {a, b} = useParams();

    if(b == 0)
        return(
            <p>Nie dzielimy przez 0 :C</p>
        )
    else
        return (
            <p>Wynik dzielenia: {parseInt(a)/parseInt(b)}</p>
        )
}