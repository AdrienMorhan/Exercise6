import {useState} from 'react';

function Creature(props) {
    let [isAwake, setIsAwake] = useState(false);
    let [linkImg, setLinkImg] = useState(props.sleepImageUrl);

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

            // Set url to awake
            setLinkImg(props.awakeImageUrl)
        } else {
            setIsAwake(false)
            console.log(isAwake);

            // Set url to sleep
            setLinkImg(props.sleepImageUrl)
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