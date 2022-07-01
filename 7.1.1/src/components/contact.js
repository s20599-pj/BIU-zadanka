import {useParams} from "react-router-dom";
import Error from "./error";

export default function Contact(){
    const {language} = useParams();

    switch (language){
        case "us":
            return <p>Obecny adres to /contact/us</p>
        case "pl":
            return <p>Obecny adres to /contact/pl</p>
        case "de":
            return <p>Obecny adres to /contact/de</p>
        case undefined:
            return <p>Obecny adres to /contact</p>
        default:
            return <Error />
    }

}