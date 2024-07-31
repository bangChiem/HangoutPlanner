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

  function calculateColSize(){
    console.log(panels.length)
    if (panels.length === 1){
      return ("col-sm-12");
    }
    else if (panels.length === 2){
      return ("col-sm-6");
    }
    else{
      return ("col-sm-4");
    }
  };

  return (
    <>
    <div className="container">
      <h1>MAIN</h1>
      <div className="row panel-container">
        {panels.map((_,index) => 
        <div key={index} className={`${calculateColSize()}`}>
          <MainPanel 
            className = "panel"
            index={index}
            setPanelData={setPanelData} 
            panelData={panelData}
          />
        </div>
        )}
      </div>
      <button onClick={handleNewPanel}>Add new panel</button>
      <button onClick={readPanelData}>Read Pane lData</button>
      <HangoutResults data={panelData}/>
    

    <footer>
      <a href="https://www.flaticon.com/free-icons/add" title="add icons">Add icons created by Pixel perfect - Flaticon</a>
    </footer>
    </div>
    </>
  );
}

export default App
