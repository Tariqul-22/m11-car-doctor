import { useEffect, useState } from "react";
import MyBookingRow from "./MyBookingRow";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../Hocks/useAuth";
import useAxiosSecure from "../../Hocks/useAxiosSecure";


const MyBookings = () => {
    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState(null)
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/bookings?email=${user?.email}`)
        .then(res => {
            console.log(res.data);
            setMyBookings(res.data)
        })


        // fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setMyBookings(data)
        //     })
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            console.log('delete', id);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = myBookings.filter(bookings => bookings._id !== id)
                            setMyBookings(remaining)
                        }
                    })
            }
        });
    }
    const handleBookingConfirm = id => {
        console.log(id);
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount > 0) {
                toast.success('data updated');
                // Updating data
                const remaining = myBookings.filter(booking => booking._id !== id);
                const updated = myBookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBookings = [updated, ...remaining];
                setMyBookings(newBookings);

            }
        })
    }
    return (
        <div className="my-20">
            <div className="h-[300px] bg-[url('././assets/images/checkout/checkout.png')] bg-no-repeat bg-cover rounded-xl text-white mt-14 flex items-center pl-32">
                <p className="text-4xl font-bold ">Cart Details</p>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead className="text-xl font-bold ">
                        <tr className="bg-base-200">
                            <th>
                                
                            </th>
                            <th>Service Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         myBookings?.map(booking => <MyBookingRow 
                            key={booking._id} 
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}>
                            </MyBookingRow>)
                       }
      
                    </tbody>
                </table>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyBookings;