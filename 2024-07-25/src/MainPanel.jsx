import ActivitiesPanel from "./ActivitiesPanel"
import BudgetPanel from "./BudgetPanel";
import React, {useState} from 'react'
import MultiDatePicker from "./MultiDatePicker";
import TimePanel from "./TimePanel";

function MainPanel( {setPanelData} ){

    const [activityRanks, setActivityRanks] = useState(["Board Games", "Shopping", "Beach", "Eating", "Playing Video Games", "Karaoke", "cooking", "traveling"])
    const [maxBudget, setMaxBudget] = useState(0)
    const [minBudget, setMinBudget] = useState(0)
    const [selectedDates, setSelectedDates] = useState([]);
    const [duration, setDuration] = useState([])
    const [time, setTime] = useState([])

    function handleSubmit(){
        const newPanelData = {activityRanks: activityRanks.slice(0,5), minBudget: minBudget, maxBudget: maxBudget, selectedDates: selectedDates, duration:duration, time: time}
        setPanelData(p => [...p, newPanelData])
    }

    return(
    <div>
        <ActivitiesPanel handleListUpdate={setActivityRanks}/>
        <BudgetPanel setMaxBudget={setMaxBudget} setMinBudget={setMinBudget}/>
        <MultiDatePicker setSelectedDates={setSelectedDates} selectedDates={selectedDates} />
        <TimePanel setDuration={setDuration} setTime={setTime} time={time}/>


        <button onClick={handleSubmit}>Submit</button>
    </div>
    );
}

export default MainPanel