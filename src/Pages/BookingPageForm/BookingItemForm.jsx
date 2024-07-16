
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../Hocks/useAuth";

const BookingItemForm = () => {
    const service = useLoaderData()
    const { user } = useAuth();
    const { _id, title, price, img } = service
    console.log(user);

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        const form = e.target

        const name = form.name.value
        const date = form.date.value
        const email = form.email.value
        const amount = form.amount.value
        const message = form.message.value

        const booking = {
            customerName: name,
            date,
            img,
            email,
            amount,
            service_id: _id,
            service: title,
            message,
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.acknowledged) {
                    toast.success("Order added successfully");
                }
            })


    }
    return (
        <div>
            <div className="h-[300px] bg-[url('././assets/images/checkout/checkout.png')] bg-no-repeat bg-cover rounded-xl text-white mt-14">
                <p>{_id}</p>
                <p>{title}</p>
                <p>{price}</p>
                <p className="text-6xl text-center">Your Order</p>
            </div>
            <div className="my-32 bg-[#F3F3F3] rounded-xl md:p-20 p-10">
                <form onSubmit={handleOrderSubmit} className="grid lg:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold">Name:</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} className="input input-bordered" name="name" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold">Date:</span>
                        </label>
                        <input type="date" className="input input-bordered" name="date" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold">Email:</span>
                        </label>
                        <input type="email" defaultValue={user?.email} className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold">Due Amount:</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" name="amount" required />
                    </div>

                    <label className="form-control lg:col-span-2">
                        <div className="label">
                            <span className="font-semibold">Message:</span>
                        </div>
                        <textarea className="textarea textarea-bordered" rows={8} placeholder="Your Message" name="message"></textarea>

                    </label>
                    <div className="lg:col-span-2">
                        <input type="submit" className="btn-orange py-4 text-xl font-semibold rounded-lg w-full" value='Order Confirm' />
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookingItemForm;