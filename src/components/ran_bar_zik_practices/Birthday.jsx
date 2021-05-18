function Birthday(props){
    const {name , age} = props.user
    return(
        <div>
            <p>My name is {name} and my age is {age}</p>
            {age<18 ? <p>You are underage!</p> : <p> You are Ok!</p>}
        </div>
    )
}
