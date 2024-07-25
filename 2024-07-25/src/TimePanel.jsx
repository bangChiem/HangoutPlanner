import Select from 'react-select';

const options = [
    { value: 'morning', label: 'Morning' },
    { value: 'afternoon', label: 'Afternoon' },
    { value: 'evening', label: 'Evening' },
    { value: 'noon', label: 'Noon' },
  ];

function TimePanel( {setDuration, setTime, time} ){

    const handleChange = (selectedOptions) => {
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setTime(selectedValues);
      };
    
      // Convert time (array of strings) back to objects for the Select component
      const selectedOptions = options.filter(option => time.includes(option.value));


    function handleDurationChange(event){
        setDuration(Number(event.target.value));
    }

    return(
        <>
            <input placeholder="how long do you want the hangout to be?" onChange={handleDurationChange}></input>
            <div>
                <Select
                    isMulti
                    value={selectedOptions}
                    onChange={handleChange}
                    options={options}
                />
            </div>  

        </>
    )
}

export default TimePanel