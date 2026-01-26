import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from 'mobx-react';
import { authStore } from './store/authStore.ts';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Home from './layout/Home.tsx';
import { ToastContainer } from 'react-toastify';
import HomePage from './features/Dashboard/Dashboard.tsx';
import AboutUs from './features/About/AboutUs.tsx';
import FAQAccordion from './features/FAQs/FAQAccordion.tsx';
import ContactUs from './features/Contact/ContactUs.tsx';
import FinanceOptions from './features/Finance/FinanceOptions.tsx';

const stores = { authStore };
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Use MainLayout for routes that need the sidebar
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/faqs",
        element: <FAQAccordion />,
      },{
        path: "/contact-us",
        element: <ContactUs />,
      },{
        path: "/finance-my-car",
        element: <FinanceOptions />,
      }
    ]
  },
  //NO sidebar or navbar pages
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider {...stores}>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router} />
      </DndProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </Provider>
  </React.StrictMode>,

)
