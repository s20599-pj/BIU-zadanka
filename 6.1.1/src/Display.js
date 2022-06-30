export default function Display({newData}) {
    return(
        <div>
            <img src={newData.results[0].picture.large} />
            <p>Imie i nazwisko: {newData.results[0].name.first} {newData.results[0].name.last}</p>
            <p>Username: {newData.results[0].login.username}</p>
            <p>Email: {newData.results[0].email}</p>
            <p>Miasto: {newData.results[0].location.city}</p>
            <p>Wiek: {newData.results[0].dob.age}</p>
        </div>

    )
}