import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useServices = () => {
    const axiosSecure = useAxiosSecure()
    const [services, setServices] = useState([])
    useEffect(() => {
        axiosSecure.get('/services')
        .then(res =>{
            console.log(res.data);
            setServices(res.data)
        }) 
        .catch(error =>{
            console.log(error);
        })
    },[])
    return services;
};

export default useServices;