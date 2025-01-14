import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProductList from "./section/Product/ProductList";
import CreateProduct from "./section/Product/CreateProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditProduct from "./section/Product/EditProduct";
import CreateCategory from "./section/Category/CreateCategory";
import CategoryList from "./section/Category/CategoryList";
import EditCategory from "./section/Category/EditCategory"
import MainDashboard from "./section/MainDashboard"
const router = createBrowserRouter([
  {
    path: "/login",
    // element:
  },
  {
    path: "/signup",
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        
          path: "dashboard",
          index:true,
          element: <MainDashboard/>,
        
      },
      {
        path: "list-product",
        element: <ProductList />,
      },
      {
        path: "create-product",
        element: <CreateProduct />,
      },
      {
        path:"edit-product/:id",

        element:<EditProduct/>
      },{
        path:"create-category",
        element:<CreateCategory/>
      },
      {
        path:"list-categories",
        element:<CategoryList/>
      },
      {
        path:"edit-category/:id",
        element:<EditCategory/>
      }
    ],
  },
]);
const App = () => {
  return (
    <>
      <ToastContainer    />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
