import React from 'react' 
import Card from './Card';
import "./Stack.css"
import DropArea from './DropArea';
import "./MainPanel.css"

function Stack( {activityRanksIsOpen, setActivityRanksIsOpen, list, setActiveCard, onDrop} ){

    function togglePanel(){
        activityRanksIsOpen ? setActivityRanksIsOpen(false) : setActivityRanksIsOpen(true)
    }
    
    return (
        <div className={`stack-column ${activityRanksIsOpen ? 'open panel' : 'panel'}`} onClick={togglePanel}>
            <DropArea onDrop={() => onDrop(0)}/>
            {list.map(
                (activity, index) =>
                    <React.Fragment key={index}>
                        <Card 
                            activityRanksIsOpen = {activityRanksIsOpen}
                            key={index} 
                            index={index} 
                            val={activity} 
                            setActiveCard={setActiveCard} 
                        />
                        <DropArea onDrop={() => onDrop(index + 1)}/>
                    </React.Fragment>
            )}
        </div>
      );
}

export default Stack
