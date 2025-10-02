import { Navigate } from "react-router-dom"
import ChoosePlan from "../../pages/ChoosePlan/ChoosePlan"
import Home from "../../pages/Home/Home"

const RouteHandler = ({ user, userPlan, setUserPlan }) => {

    if (!user) return <Home/>
    
    if (user && !userPlan) return <ChoosePlan setUserPlan={setUserPlan} />
    
    if (user && userPlan) return <Navigate to={'/browse'}/> 

}

export default RouteHandler