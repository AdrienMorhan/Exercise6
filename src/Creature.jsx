import {useState} from 'react';

function Creature(props) {
    let [isAwake, setIsAwake] = useState(false);

    const style = {
        position: 'absolute',
        left: props.x + 'px',
        top: props.y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    function handleClick() {
    if (!isAwake) {
        setIsAwake(true)
        console.log(isAwake);
    } else {
        setIsAwake(false)
        console.log(isAwake);
    }
}

    return (
        <div style={style} onClick={handleClick}>
            <img src={props.sleepImageUrl} alt={props.name} width="120" />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;
