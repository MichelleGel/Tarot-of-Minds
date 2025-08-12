import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import CardDeck from "../pages/CardDeck";
import CardDetail from "../pages/CardDetail";
import TarotSpread from "../pages/TarotSpread";
import Entry from "../components/AnimatedEntry/Entry";

const RouterTarot = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
        {
            index:true,
            element:<Entry/>
        },
        {
            path:"/home",
            element:<Home/>
        },
        {
            path:"/cards",
            element:<CardDeck/>
        },
        {
            path:"/card/:id",
            element:<CardDetail/>
        },
        {
            path:"/lecture",
            element:<TarotSpread/>
        }

    ]
}])

export default RouterTarot