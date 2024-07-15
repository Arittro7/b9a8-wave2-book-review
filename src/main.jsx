import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import{
  createBrowserRouter,
  RouterProvider,
}from 'react-router-dom';
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import ReadablePage from './Components/ReadablePages/ReadablePages.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
const router = createBrowserRouter([
  {
    path: "",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/listedbook",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/pageRead",
        element: <ReadablePage></ReadablePage>,
        loader: () => fetch("../data.json"),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer/>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
