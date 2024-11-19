import axios from "axios";
import { create } from "zustand";




const coffeeStore = create((set) => ({
    coffeDataList: [],
    coffeeDataListApi: async () => {
        try {
            const res = await axios.get(`https://espresso-emporium-backend-lemon.vercel.app/coffee`);
            set({ coffeDataList: res.data });
        } catch (error) {
            console.error(error);
        }

    },
    coffeeDeleteApi: async (id) => {
        try {
            await axios.delete(`https://espresso-emporium-backend-lemon.vercel.app/coffee/${id}`);
            return true;
        } catch (error) {
            console.error(error);
        }
    },
    singleCoffeeData : [],
    singleCoffeeDataApi: async (id) => {
        try {
            const res = await axios.get(`https://espresso-emporium-backend-lemon.vercel.app/coffee/${id}`);
            set({ singleCoffeeData: res.data });
        } catch (error) {
            console.error(error);
        }
    },

    coffeeUpdateApi : async (id,payload)=>{
        try {
            await axios.put(`https://espresso-emporium-backend-lemon.vercel.app/coffee/${id}`, payload);
            return true;
        } catch (error) {
            console.error(error);
        }
    }

}));

export default coffeeStore;