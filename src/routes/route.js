import MainRoot from "../components/MainRoot";
import Basket from "../pages/Basket";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:"*",
                element:<NotFound/>
            },
            
        ]
    }
]
 export default ROUTES