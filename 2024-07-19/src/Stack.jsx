import React from 'react' 
import Card from './Card';
import "./Stack.css"
import DropArea from './DropArea';

function Stack( {list, setActiveCard, onDrop} ){
    
    return (
        <div className='stack-column'>
            <h1 className='stack-header'>List</h1>
            <DropArea onDrop={() => onDrop(0)}/>
            {list.map(
                (activity, index) =>
                    <React.Fragment key={index}>
                        <Card 
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
