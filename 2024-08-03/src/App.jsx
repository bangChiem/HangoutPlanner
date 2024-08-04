import MainPanel from "./MainPanel";
import HangoutResults from "./HangoutResults";
import './App.css'
import 'react-day-picker/dist/style.css';
import React, { useState } from "react";

function App() {

  const [panelData, setPanelData] = useState([])
  const [panels, setPanels] = useState([])
  const [showInstructions, setShowInstructions] = useState(true)

  function handleNewPanel(){
    setShowInstructions(false)
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
    else {
      return ("col-sm-4");
    }
  };

  return (
    <div className="container">
      <div className="row topbar">
        <div className="col-sm-4 center-items">
          <span className="hangouts-title">Hangouts</span>
        </div>
        <div className="col-sm-8 container-fluid center-items">
          <div className="toolbar row mx-auto">
            <div className="col-sm-6">
              <div onClick={handleNewPanel} className="tool-button">
                  <img src="src/assets/plus.png"></img>Add Panel
                </div>
            </div>
            <div className="col-sm-6">
              <div onClick={handleNewPanel} className="tool-button">
                <img src="src/assets/FindRes.png"></img>Find Hangout
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`instructions-panel ${showInstructions ? '' : 'hide'}`}>
        <img className="mobile" width={328} src="/src/assets/startInstructions.png"></img>
        <img width={1024} className="desktop" src="/src/assets/desktopStartInstruction.png"></img>
      </div>


        <div className="row panel-container">
          {panels.map((_,index) => 
          <div key={index} className={`col-sm-4`}>
            <MainPanel 
              className = "panel"
              index={index}
              setPanelData={setPanelData} 
              panelData={panelData}
            />
          </div>
          )}
        </div>
        <HangoutResults data={panelData}/>
    </div>
  );
}

export default App
