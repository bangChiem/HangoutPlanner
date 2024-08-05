import "./HangoutResults.css"
import ReactDom from 'react-dom'
import React, {useState} from 'react'

function HangoutResults( {data, open, onClose} ){

    const [displayActivities, setDisplayActivities] = useState()
    const [displayMinBudget, setDisplayMinBudget] = useState()
    const [displayMaxBudget, setDisplayMaxBudget] = useState()
    const [displayDates, setDisplayDates] = useState()
    const [displayDuration, setDisplayDuration] = useState()
    const [displayTime, setDisplayTime] = useState()
    let emptyArray = []

    function handleIfDataHasBeenSubmitted(){
      if (data.length < 2){
        return false;
      }
      else{
        return true;
      }
    }

    function findResults(){
        if (data.length < 2){
          console.log("too small")
          return
        }
    
    
        let sharedActivities = [];
        let setSharedActivities = [];
    
        let lowerBudgetRange = data[0].minBudget;
        let higherBudgetRange = data[0].maxBudget;
    
        let sharedDates = [];
        let setSharedDates = [];
    
        let agreedDuration = data[0].duration;
        
        let sharedTimes = [];
        let setSharedTimes = [];
    
    
        for (const item of data){
          //find matching activities that were ranked highly and save to sharedActivities list
          for (const activity of item.activityRanks){
            if (!setSharedActivities.includes(activity)){
              setSharedActivities.push(activity)
            }
            else{
              if (!sharedActivities.includes(activity)){
                sharedActivities.push(activity)
              }
            }
          }
          //find lowest minimum budget and minimum max budget
          if (item.minBudget < lowerBudgetRange){
            lowerBudgetRange = item.minBudget;
          }
          if (item.maxBudget < higherBudgetRange){
            higherBudgetRange = item.maxBudget;
          }
          //find matching dates from dates selected from users
          for (const date of item.selectedDates){
            if (!setSharedDates.includes(date.toDateString())){
                setSharedDates.push(date.toDateString())
            }
            else{
              if (!sharedDates.includes(date.toDateString())){
                sharedDates.push(date.toDateString())
              }
            }
          }
          //find shortest duration 
          if (item.duration < agreedDuration){
            agreedDuration = item.duration;
          }
          //find matching times from times selected from users
          for (const t of item.time){
            if (!setSharedTimes.includes(t)){
              setSharedTimes.push(t)
            }
            else{
              if (!sharedTimes.includes(t)){
                sharedTimes.push(t)
              }
            }
          }
        }
    
        setDisplayActivities(sharedActivities)
        setDisplayDates(sharedDates)
        if (sharedDates == []){
            setDisplayDates("No Dates found where all friends are availible")
        }
        setDisplayMinBudget(lowerBudgetRange)
        setDisplayMaxBudget(higherBudgetRange)
        setDisplayDuration(agreedDuration)
        setDisplayTime(sharedTimes)
        if (sharedTimes == []){
            setDisplayTime("No Time periods found where all friends are availible")
        }
      }

    if(!open) return null

    return ReactDom.createPortal(
    <>
      <div className="overlay"></div>

      <div className="hangout-results-container">
        <div className={`${handleIfDataHasBeenSubmitted() ? "hide" : ''} `}>
          NOT ENOUGH DATA

          *click outside of popup to close
        </div>
        

        <div className={`${handleIfDataHasBeenSubmitted() ? "" : 'hide'}`}>
            <p>
              IDEAL Hangout: <br></br><br></br>
              Activites: {displayActivities} <br></br>
              Dates: {displayDates} <br></br>
              Minimum Budget: {displayMinBudget} <br></br>
              Maximum Budget: {displayMaxBudget} <br></br>
              Length of Hangout: {displayDuration} <br></br>
              Time period of Hangout: {displayTime} <br></br>
          </p>
          <button onClick={findResults}>FIND RES</button> 
        </div>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </>,
    document.getElementById('portal')
    );
}

export default HangoutResults
