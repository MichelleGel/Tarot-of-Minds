import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import CardDeck from "../pages/CardDeck";
import CardDetail from "../pages/CardDetail";
import TarotSpread from "../pages/TarotSpread";

const RouterTarot = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
        {

        },
        {
            path:"/deckofcards",
            element:<CardDeck/>
        },
        {
            path:"/detailcard/:id",
            element:<CardDetail/>
        },
        {
            path:"/tarotlecture",
            element:<TarotSpread/>
        }

    ]
}])

export default RouterTarot