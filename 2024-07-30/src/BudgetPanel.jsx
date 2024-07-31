import React, {useState} from 'react'
import MainPanel from './MainPanel'

function BudgetPanel( {setBudgetPanelIsOpen, budgetPanelIsOpen, setMaxBudget, setMinBudget} ){

    let MaxBudget
    let MinBudget

    function handleMaxBudgetChange(event){
        setMaxBudget(Number(event.target.value))
    }

    function handleMinBudgetChange(event){
        setMinBudget(Number(event.target.value))
    }

    function toggleBudgetPanel(){
        budgetPanelIsOpen ? setBudgetPanelIsOpen(false) : setBudgetPanelIsOpen(true)
    }
    
    return(
        <div className={`budget-panel ${budgetPanelIsOpen ? "panel open": "panel"}`} onClick={toggleBudgetPanel}>
            <input type="number" placeholder="Enter Max Budget Range" onChange={handleMaxBudgetChange} value={MaxBudget}/>
            <input type="number" placeholder="Enter Min Budget Range" onChange={handleMinBudgetChange} value={MinBudget}/>
        </div>
    );
}

export default BudgetPanel