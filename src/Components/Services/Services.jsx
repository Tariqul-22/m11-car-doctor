import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("/Services.json")
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    },[])
    console.log(services);
    return (
        <div>
            <div className="text-center space-y-5">
                <h3 className="text-xl font-bold text-orange-600">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area  </h1>
                <p className="w-8/12 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
                    {
                        services.map(service => <ServiceCard 
                            key={service.service_id}
                            service={service}
                            ></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;