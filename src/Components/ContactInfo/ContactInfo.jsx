import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { TbOvalVerticalFilled } from "react-icons/tb";


const ContactInfo = () => {
    return (
        <div className="min-h-64 bg-gray-900 text-white rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-36 xl:px-10">
            <div className="flex items-center gap-5 mx-auto">
                <div className="text-gray-900 relative">
                    <FaCalendarAlt className="text-white text-3xl"></FaCalendarAlt>
                    <div className="z-10">
                        <FaRegClock className="absolute -right-1 -bottom-1 bg-orange-600 rounded-full"></FaRegClock>
                    </div>
                </div>
                <div>
                    <p className="font-medium">We are open monday-friday</p>
                    <h3 className="text-2xl font-bold mt-2">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex items-center gap-5 mx-auto">
                <div className="relative">
                    <BsFillTelephoneFill className="text-white text-3xl"></BsFillTelephoneFill>
                    <BiSolidMessageRoundedDots className="absolute -top-2 left-3 text-2xl text-orange-600 bg-gray-900"></BiSolidMessageRoundedDots>
                </div>
                <div>
                    <p className="font-medium">Have a question?</p>
                    <h3 className="text-2xl font-bold mt-2">+2546 251 2658</h3>
                </div>
            </div>
            <div className="flex items-center gap-5 mx-auto">
                <div className="relative">
                    <ImLocation2 className="relative text-3xl text-orange-600 z-10"></ImLocation2>
                    <TbOvalVerticalFilled className="absolute left-0 top-4 text-3xl z-0"></TbOvalVerticalFilled>
                </div>
                <div>
                    <p className="font-medium">Need a repair? our address</p>
                    <h3 className="text-2xl font-bold mt-2">Liza Street, New York</h3>
                </div>
            </div>

        </div>
    );
};

export default ContactInfo;