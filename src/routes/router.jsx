import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home-page/Home";
import CoffeeDetails from "../pages/home-page/CoffeeDetails";
import AddCoffeForm from "../pages/home-page/AddCoffeForm";
import UpdateCoffeForm from "../pages/home-page/UpdateCoffeForm";
import SingUp from "../components/SingUp";


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
                path:"coffe-details/:id",
                element : <CoffeeDetails></CoffeeDetails>
            },
            {
                path : "add-coffe",
                element : <AddCoffeForm></AddCoffeForm>
            },
            {
                path : "update-coffec/:id",
                element : <UpdateCoffeForm></UpdateCoffeForm>
            },
            
                
            
        ]
    },
<<<<<<< HEAD
    {
            path : "/sign-up",
            element : <SingUp></SingUp>
    }
=======
    
>>>>>>> 022b478319ad9cc2314617aaf8566117d8a8d790
])