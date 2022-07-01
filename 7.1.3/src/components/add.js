import {useParams} from "react-router-dom";

export default function Add() {
    const {a, b} = useParams();

    return(
        <p>Wynik dodawania: {parseInt(a) + parseInt(b)}</p>
    )
}