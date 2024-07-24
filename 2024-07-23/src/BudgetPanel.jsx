import React, {useState} from 'react'

function BudgetPanel( {setMaxBudget, setMinBudget} ){

    let MaxBudget
    let MinBudget

    function handleMaxBudgetChange(event){
        setMaxBudget(event.target.value)
    }

    function handleMinBudgetChange(event){
        setMinBudget(event.target.value)
    }
    
    return(
        <div>
            <input type="number" placeholder="Enter Max Budget Range" onChange={handleMaxBudgetChange} value={MaxBudget}/>
            <input type="number" placeholder="Enter Min Budget Range" onChange={handleMinBudgetChange} value={MinBudget}/>
        </div>
    );
}

export default BudgetPanel