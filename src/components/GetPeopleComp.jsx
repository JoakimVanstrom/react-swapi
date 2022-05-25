import { useEffect, useState } from "react"
import '../styles/PeopleStyle.scss'

const GetPeopleComp = () => {
    const [page, setPage] = useState(1)
    const [people, setPeople] = useState([])

    const increment = () => { if(page !== 9){setPage(page + 1)} }
    const decrement = () => { if(page !== 1){setPage(page - 1) } }

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then((res) => res.json())
        .then((data) => setPeople(data.results))
    }, [page])
    return <div>
        <div className="charWrapper">
         <h2>Characters</h2>
         <div className="character-list">
         <ul>
             {people.map((person) => {
                    return <li key={person.name}>{person.name}</li>
                })}
         </ul>
         </div>
        </div>
        <div className="BtnWrapper">
        <button className="prev" onClick={decrement}>Dec</button>
        <p>{page}</p>
        <p>/</p>
        <p>9</p>
        <button className="next" onClick={increment}>Inc</button>
        </div>
    </div>
    }

export default GetPeopleComp
