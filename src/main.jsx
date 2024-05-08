import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from './components/MainContainer.jsx';
import WatchPage from './components/WatchPage.jsx';
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import SearchedVideoList from './components/SearchedVideoList.jsx';
import TagsContent from './components/TagsContent.jsx';
import Body from './components/Body.jsx';
import SearchPage from './components/SearchPage.jsx';
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      },
      {
        path:"search",
        element:<SearchedVideoList/>
      },
      {
        path:"explore",
        element:<TagsContent/>
      }
      ,{
        path:"/searchPage",
        element:<SearchPage/>,
       },
    ]
   },
   

   ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={appStore}>
    <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)