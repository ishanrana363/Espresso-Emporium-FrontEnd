import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home-page/Home";
import CoffeeDetails from "../pages/home-page/CoffeeDetails";
import AddCoffeForm from "../pages/home-page/AddCoffeForm";


export const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout></Layout>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path:"coffe-details",
                element : <CoffeeDetails></CoffeeDetails>
            },
            {
                path : "add-coffe",
                element : <AddCoffeForm></AddCoffeForm>
            }
        ]
    }
])