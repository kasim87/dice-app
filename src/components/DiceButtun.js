function DiceButtun(props){
    return(
        <div>
            <button onClick={props.handleFunct}>
                <img src={require(`../assets/dice${props.DiceImgNum}.png`)}></img>
            </button>
        </div>
    )
}

export default DiceButtun;