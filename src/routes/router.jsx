import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home-page/Home";
import CoffeeDetails from "../pages/home-page/CoffeeDetails";
import AddCoffeForm from "../pages/home-page/AddCoffeForm";
import UpdateCoffeForm from "../pages/home-page/UpdateCoffeForm";
import SingUp from "../components/SingUp";
import UserList from "../components/UserList";


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
    {
            path : "/sign-up",
            element : <SingUp></SingUp>
    },
    {
        path : "/user-list",
        element : <UserList></UserList>
    }
])