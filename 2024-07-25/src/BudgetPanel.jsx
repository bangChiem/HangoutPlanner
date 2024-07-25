import React, {useState} from 'react'

function BudgetPanel( {setMaxBudget, setMinBudget} ){

    let MaxBudget
    let MinBudget

    function handleMaxBudgetChange(event){
        setMaxBudget(Number(event.target.value))
    }

    function handleMinBudgetChange(event){
        setMinBudget(Number(event.target.value))
    }
    
    return(
        <div>
            <input type="number" placeholder="Enter Max Budget Range" onChange={handleMaxBudgetChange} value={MaxBudget}/>
            <input type="number" placeholder="Enter Min Budget Range" onChange={handleMinBudgetChange} value={MinBudget}/>
        </div>
    );
}

export default BudgetPanel