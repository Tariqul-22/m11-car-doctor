import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData()
    const { _id, title, price } = service
    return (
        <div>
            <div className="h-[300px] bg-[url('././assets/images/checkout/checkout.png')] bg-no-repeat bg-cover rounded-xl text-white mt-14">
                <p>{_id}</p>
                <p>{title}</p>
                <p>{price}</p>
            </div>
            <div className="my-32 bg-[#F3F3F3] rounded-xl md:p-24 p-10">
                <form className="grid lg:grid-cols-2 gap-6">
                    <div className="py-4 pl-6 bg-[#FFFFFF] rounded-lg">
                        <input type="text" className="overflow-auto outline-none"  placeholder="First Name" name="firstName"  required />
                    </div>
                    <div className="py-4 pl-6 bg-[#FFFFFF] rounded-lg">
                        <input type="text" className="overflow-auto outline-none" placeholder="Last Name" name="lastName" required />
                    </div>
                    <div className="py-4 pl-6 bg-[#FFFFFF] rounded-lg">
                        <input type="number" className="overflow-auto outline-none" placeholder="Your Phone" name="phone" required />
                    </div>
                    <div className="py-4 pl-6 bg-[#FFFFFF] rounded-lg">
                        <input type="email" className="overflow-auto outline-none" placeholder="Your Email" name="email" required />
                    </div>

                    <div className="lg:col-span-2">
                        <textarea name="message" placeholder='Your Message' className="w-full rounded-lg py-4 pl-6 overflow-auto outline-none" rows='10'></textarea>
                    </div>
                    <div className="lg:col-span-2">
                        <input type="submit" className="btn-orange py-4 text-xl font-semibold rounded-lg w-full" value='Order Confirm' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;