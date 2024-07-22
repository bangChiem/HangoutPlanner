import React, {useState} from 'react'

function BudgetPanel( {handleBudgetUpdate, panelIndex} ){

    let budget

    function handleBudgetChange(event){
        handleBudgetUpdate(panelIndex, event.target.value)
    }
    
    return(
        <input type="string" placeholder="Enter Budget Range" onChange={handleBudgetChange} value={budget}/>
    );
}

export default BudgetPanel