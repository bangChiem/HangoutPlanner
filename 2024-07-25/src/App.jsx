import MainPanel from "./MainPanel";
import HangoutResults from "./HangoutResults";
import './App.css'
import React, { useState } from "react";

function App() {

  const [panelData, setPanelData] = useState([])
  const [panels, setPanels] = useState([])

  function handleNewPanel(){
    const newPanel = {}
    setPanels(p => [...p, newPanel])
  }

  function readPanelData(){
    console.log(panelData.map((panel,index) => console.log(`PANEL: ${index} Data: ${panel.activityRanks} ${panel.minBudget} ${panel.maxBudget} ${panel.selectedDates} ${panel.duration} ${panel.time}`)) )
  }

  return (
    <>
    <h1>MAIN</h1>
    <div className="panel-container">
      {panels.map((_,index) => 
      <MainPanel 
        key = {index} 
        setPanelData={setPanelData} 
        panelData={panelData}
      />
      )}
    </div>
    <button onClick={handleNewPanel}>Add new panel</button>
    <button onClick={readPanelData}>Read Pane lData</button>
    <HangoutResults data={panelData}/>
    </>
  );
}

export default App
