function TimePanel( {setDuration, setTime} ){

    const time = "n/a";

    function handleDurationChange(event){
        setDuration(event.target.value)
    }

    function handleTimeChange(event){
        setTime(event.target.value)
    }

    return(
        <>
            <input placeholder="how long do you want the hangout to be?" onChange={handleDurationChange}></input>
            <select name="when" value={time} onChange={handleTimeChange}>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Noon">Noon</option>
            </select>
        </>
    )
}

export default TimePanel