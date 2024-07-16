import axios from "axios";
import { useEffect, useState } from "react";


const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/services')
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