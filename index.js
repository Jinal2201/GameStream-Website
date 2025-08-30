import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Home from "./pages/Home";
import About from "./pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./pages/Store";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import WordConnect from "./Games/WordConnect";
import Hajari from "./Games/Hajari";
import BackGammon from "./Games/BackGammon";
import Playing7 from "./Games/Playing_7";
import Rummy from "./Games/Rummy";
import TeenPattiLakh from "./Games/Teen_Patti_Lakh";
import A1P from "./Games/A1P";
import BlockPuzzle from "./Games/BlockPuzzle";
import ColorRun from "./Games/ColorRun";
import CallBreak from "./Games/CallBreak";
import TeenPattiJoy from "./Games/TeenPattiJoy";
import IndianRummy from "./Games/IndianRummy";
import HoldEmPoker from "./Games/HoldEmPoker";
import A1PTeenPatti from "./Games/A1PTeenPatti";
import TonkOffline from "./Games/TonkOffline";
import YONO from "./Games/YONO";
import A1P_LUDO from "./Games/A1P_Ludo";
import RummyRoyal from "./Games/Rummy_Royal";
import TeenPattidiamond from "./Games/Teen_Patti_Diamond";
import WordConnectStore from "./Games_Sorce_Code/WordConnectStore";
import FruitCutStore from "./Games_Sorce_Code/FruitCutStore";
import ColorBounceStore from "./Games_Sorce_Code/ColorBounceStore";
import CarromBoardStore from "./Games_Sorce_Code/CarromBoardStore";
import BallPopStore from "./Games_Sorce_Code/BallPopStore";
import CubeJumpStore from "./Games_Sorce_Code/CubeJump";
import SudokuStore from "./Games_Sorce_Code/SudokuStore";


const root=ReactDOM.createRoot(document.getElementById('root'));
let allroutes=createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about-us',
      element:<About/>
    },
    {
      path:'/services',
      element:<Services/>
    },
    {
      path:'/potfolio',
      element:<Portfolio/>
    },
    {
      path:'/portfolio/WordConnect',
      element:<WordConnect/>
    },
    {
      path:'/portfolio/Hajari',
      element:<Hajari/>
    },
    {
      path:'/potfolio/BackGammon',
      element:<BackGammon/>
    },
    {
      path:'/potfolio/Playing7',
      element:<Playing7/>
    },
    {
      path:'/potfolio/Rummy',
      element:<Rummy/>
    },
    {
      path:'/potfolio/TeenPattiLakh',
      element:<TeenPattiLakh/>
    },
    {
      path:'/potfolio/A1P',
      element:<A1P/>
    },
    {
      path:'/potfolio/BlockPuzzle',
      element:<BlockPuzzle/>
    },
    {
      path:'/potfolio/ColorRun',
      element:<ColorRun/>
    },
    {
      path:'/potfolio/CallBreak',
      element:<CallBreak/>
    },
    {
      path:'/potfolio/Teen-Patti-Joy',
      element:<TeenPattiJoy/>
    },
    {
      path:'/potfolio/Indian-Rummy',
      element:<IndianRummy/>
    },
    {
      path:'/potfolio/Holdem-poker',
      element:<HoldEmPoker/>
    },
    {
      path:'/potfolio/a1p-teen-patti',
      element:<A1PTeenPatti/>
    },
    {
      path:'/potfolio/tonk-offline',
      element:<TonkOffline/>
    },
    {
      path:'/potfolio/yono',
      element:<YONO/>
    },
    {
      path:'/potfolio/a1p-ludo',
      element:<A1P_LUDO/>
    },
    {
      path:'/potfolio/rummy-royal',
      element:<RummyRoyal/>
    },
    {
      path:'/potfolio/teen-patti-diamond',
      element:<TeenPattidiamond/>
    },
    {
      path:'/store/Word-Connect-Store',
      element:<WordConnectStore/>
    },
    {
      path:'/store/Fruit-Cut-Store',
      element:<FruitCutStore/>
    },
    {
      path:'/store/Color-Bounce-Store',
      element:<ColorBounceStore/>
    },
    {
      path:'/store/Carrom-Board-Store',
      element:<CarromBoardStore/>
    },
    {
      path:'/store/Ball-Pop-Store',
      element:<BallPopStore/>
    },
    {
      path:'/store/Cube-Jump-Store',
      element:<CubeJumpStore/>
    },
    {
      path:'/store/Sudoku-Store',
      element:<SudokuStore/>
    },
    {
      path:'/contact-us',
      element:<Contact/>
    },
    {
      path:'/store',
      element:<Store/>
    }
  ]
)
root.render(
  <React.StrictMode>
  <RouterProvider router={allroutes}/>
  </React.StrictMode>
);
