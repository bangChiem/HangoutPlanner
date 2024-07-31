import ActivitiesPanel from "./ActivitiesPanel"
import BudgetPanel from "./BudgetPanel";
import React, {useState} from 'react'
import MultiDatePicker from "./MultiDatePicker";
import TimePanel from "./TimePanel";
import './MainPanel.css'

function MainPanel( {index, setPanelData} ){

    const [activityRanks, setActivityRanks] = useState(["Board Games", "Shopping", "Beach", "Eating", "Playing Video Games", "Karaoke", "cooking", "traveling"])
    const [maxBudget, setMaxBudget] = useState(0)
    const [minBudget, setMinBudget] = useState(0)
    const [selectedDates, setSelectedDates] = useState([]);
    const [duration, setDuration] = useState([])
    const [time, setTime] = useState([])

    const [activityRanksIsOpen, setActivityRanksIsOpen] = useState(false)
    const [budgetPanelIsOpen, setBudgetPanelIsOpen] = useState(false)
    const [datePanelIsOpen, setDatePanelIsOpen] = useState(false)
    const [timePanelIsOpen, setTimePanelIsOpen] = useState(false)

    function handleSubmit(){
        const newPanelData = {activityRanks: activityRanks.slice(0,5), minBudget: minBudget, maxBudget: maxBudget, selectedDates: selectedDates, duration:duration, time: time}
        setPanelData(p => [...p, newPanelData])
    }

    function setColor(index){
        if(index == 0){
            return 'one-panel'
        }
        if(index == 1){
            return 'two-panel'
        }
        if(index == 2){
            return 'three-panel'
        }
        if(index == 3){
            return 'four-panel'
        }
        if(index == 4){
            return 'five-panel'
        }
        if(index == 5){
            return 'six-panel'
        }
        if(index == 6){
            return 'seven-panel'
        }
        if(index == 7){
            return 'eight-panel'
        }
    }

    function toggleActivitiesPanel(){
        activityRanksIsOpen ? setActivityRanksIsOpen(false) : setActivityRanksIsOpen(true)
    }

    function toggleBudgetPanel(){
        budgetPanelIsOpen ? setBudgetPanelIsOpen(false) : setBudgetPanelIsOpen(true)
    }

    function toggleDatePanel(){
        datePanelIsOpen ? setDatePanelIsOpen(false) : setDatePanelIsOpen(true)
    }

    function toggleTimePanel(){
        timePanelIsOpen ? setTimePanelIsOpen(false) : setTimePanelIsOpen(true)
    }

    return(
    <div className={`panels-container ${setColor(index)}`}>
        <div className={`${activityRanksIsOpen ? "panel-open" : "panel-closed"}`} onClick={toggleActivitiesPanel}>Activities</div>
        <ActivitiesPanel setActivityRanksIsOpen={setActivityRanksIsOpen} activityRanksIsOpen={activityRanksIsOpen} handleListUpdate={setActivityRanks}/>

        <div className={`${budgetPanelIsOpen ? "panel-open" : "panel-closed"}`} onClick={toggleBudgetPanel}>Budget</div>
        <BudgetPanel setBudgetPanelIsOpen={setBudgetPanelIsOpen} budgetPanelIsOpen={budgetPanelIsOpen} setMaxBudget={setMaxBudget} setMinBudget={setMinBudget}/>

        <div className={`${datePanelIsOpen ? "panel-open" : "panel-closed"}`} onClick={toggleDatePanel}>Date</div>
        <MultiDatePicker setDatePanelIsOpen={setDatePanelIsOpen} datePanelIsOpen={datePanelIsOpen} setSelectedDates={setSelectedDates} selectedDates={selectedDates} />

        <div className={`${timePanelIsOpen ? "panel-open" : "panel-closed"}`} onClick={toggleTimePanel}>Time</div>
        <TimePanel timePanelIsOpen={timePanelIsOpen} toggleTimePanel={toggleTimePanel} setDuration={setDuration} setTime={setTime} time={time}/>

        <button onClick={handleSubmit}>Submit</button>
    </div>
    );
}

export default MainPanel