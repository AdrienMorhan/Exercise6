import {useState} from 'react';

function Creature(props) {
    let [isAwake, setIsAwake] = useState(false);
    let [linkImg, setLinkImg] = useState(props.sleepImageUrl);
    let [x, setX] = useState(props.x);
    let [y, setY] = useState(props.y);

    const style = {
        position: 'absolute',
        left: x + 'px',
        top: y + 'px',
        textAlign: 'center',
        imageRendering: 'pixelated'
    };

    function handleClick() {
        if (!isAwake) {
            setIsAwake(true)
            console.log(isAwake);

            // Set url to awake
            setLinkImg(props.awakeImageUrl);

            // Set x,y coordinate
            setX(Math.random() * (750 - 50) + 50);
            setY(Math.random() * (750 - 50) + 50);

        } else {
            setIsAwake(false)
            console.log(isAwake);

            // Set url to sleep
            setLinkImg(props.sleepImageUrl);

        }
    }

    return (
        <div style={style} onClick={handleClick}>
            <img src={linkImg} alt={props.name} width="120" />
            <p>{props.name}, age {props.age}</p>
        </div>
    );
}

export default Creature;