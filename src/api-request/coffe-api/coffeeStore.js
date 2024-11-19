import axios from "axios";
import { create } from "zustand";




const coffeeStore = create((set)=>({
    coffeDataList : [],
    coffeeDataListApi : async ()=>{
        try {
            const res = await axios.get(`https://espresso-emporium-backend-lemon.vercel.app/coffee`);
            set({coffeDataList : res.data});
        } catch (error) {
            console.error(error);
        }
        
    }
}));

export default coffeeStore;