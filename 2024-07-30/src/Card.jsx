import './Card.css'
import './MainPanel.css'

function Card( {activityRanksIsOpen, index, val, setActiveCard} ){

    function setColor(index){
        if(index == 0){
            return 'one activity'
        }
        if(index == 1){
            return 'two activity'
        }
        if(index == 2){
            return 'three activity'
        }
        if(index == 3){
            return 'four activity'
        }
        if(index == 4){
            return 'five activity'
        }
        if(index == 5){
            return 'six activity'
        }
        if(index == 6){
            return 'seven activity'
        }
        if(index == 7){
            return 'eight activity'
        }
    }

    return(
        <article
            draggable="true" 
            onDragStart={() => setActiveCard(index)} 
            onDragEnd={() => setActiveCard()}
        >
            <p className={setColor(index)} >{val}</p>
        </article>
    )



}

export default Card