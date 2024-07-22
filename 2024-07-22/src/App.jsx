import MainPanel from "./MainPanel";
import './App.css'
import React, { useState } from "react";
function App() {

  const mainList = [{list: ['temp','temp','temp'], budget: 0}, {list: ['temp','temp','temp'], budget: 0}];
  const panelIndex = 0;
  const panelIndex1 = 1;

  function handleListUpdate(index, newList){
    mainList[index].list = newList;
  }

  function handleBudgetUpdate(index, newBudget){
    mainList[index].budget = newBudget;
  }


  function createNewPanel(){
    
  }

  return (
    <>
    <div className="panel-container">
      <MainPanel handleListUpdate={handleListUpdate} handleBudgetUpdate={handleBudgetUpdate}panelIndex={panelIndex}/>
      <MainPanel handleListUpdate={handleListUpdate} handleBudgetUpdate={handleBudgetUpdate} panelIndex={panelIndex1}/>
    </div>
    <button>Add new panel</button>
    </>
  );
}

export default App
