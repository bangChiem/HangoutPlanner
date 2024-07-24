import MainPanel from "./MainPanel";
import './App.css'
import React, { useState } from "react";

function App() {

  const [panelData, setPanelData] = useState([])
  const [panels, setPanels] = useState([])

  function handleNewPanel(){
    const newPanel = {}
    setPanels(p => [...p, newPanel])
  }

  return (
    <>
    <h1>MAIN</h1>
    <h2>panels: </h2>
    <ol>{panelData.map((panel,index) => <li key={index}>
        {panel.activityRanks}
        {panel.minBudget}
        {panel.maxBudget}
        {panel.selectedDates}
        {panel.duration}
        {panel.time}
      </li>)}
    </ol>


    <div className="panel-container">
      {panels.map((_,index) => <MainPanel key = {index} setPanelData={setPanelData} panelData={panelData}/>)}
    </div>
    <button onClick={handleNewPanel}>Add new panel</button>
    </>
  );
}

export default App
