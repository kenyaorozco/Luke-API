import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const search = [
        "people",
        "planets",
        ];

    const [pickSearch,setPickSearch] = useState(search[0])
    const [numID,setNumID] = useState(1)

    
    const nav = useNavigate();


    const submit = (e) => {
        e.preventDefault()
        console.log(pickSearch, numID);
        nav("/"+ pickSearch + "/" + numID)
    }

    
    
    return (
    <div>Form
        <form onSubmit={submit}>
            <label>Select: </label>
            <select value={pickSearch} 
            onChange={(e) => setPickSearch(e.target.value)}>

                { search.map((name,order) => 
                    <option key={order} value={name}>
                        {name}
                    </option>
                )}

            </select>


            <label>ID:</label>
                <input 
                    type="number"
                    min = "1"
                    onChange={(e) => setNumID(e.target.value)}
                    value = {numID}/>
            <button>Submit</button>
        </form>
    </div>
    )
}

export default Form