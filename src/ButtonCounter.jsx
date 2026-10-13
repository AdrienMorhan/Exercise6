import {useState} from 'react';

function Creature(props) {
    let [isAwake, setIsAwake] = useState(false);
    let [name, setName] = useState("Strong");
}

function handleClick() {
    if (!isAwake) {
        setName("Sleeping")
        setIsAwake(true)
    } else {
        setName("Strong")
        setIsAwake(false)
    }
    return (
    <div onClick={handleClick}>
        <p>{name}</p>
    </div>
    )
}



export default Creature;