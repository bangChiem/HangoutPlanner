import React, {useState} from 'react';
import Stack from "./Stack";
function ActivitiesPanel() {

  const [list,setList] = useState(["Board Games", "Shopping", "Beach", "Eating", "Playing Video Games", "Karaoke", "cooking", "traveling"]);
  const [activeCard, setActiveCard] = useState('null');

  const onDrop = (position) => {
  console.log(`${activeCard} is going to position ${position}`);

    
  if(activeCard == null || activeCard === undefined) return;

  const activityToMove = list[activeCard];
  const updatedList = list.filter((task,index) => index !== activeCard);

  updatedList.splice(position, 0, 
    activityToMove
  )
  setList(updatedList);
  }


  return (
    <>
      <Stack list={list} setActiveCard={setActiveCard} onDrop={onDrop}/>
    </>
  );
}

export default ActivitiesPanel
