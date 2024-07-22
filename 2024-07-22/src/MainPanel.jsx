import ActivitiesPanel from "./ActivitiesPanel"
import BudgetPanel from "./BudgetPanel";

function MainPanel( {handleListUpdate, panelIndex, handleBudgetUpdate} ){
    return(
    <div>
        <ActivitiesPanel handleListUpdate={handleListUpdate} panelIndex={panelIndex}/>
        <BudgetPanel handleBudgetUpdate={handleBudgetUpdate} panelIndex={panelIndex}/>
    </div>
    );
}

export default MainPanel