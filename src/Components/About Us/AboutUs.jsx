import person from "../../assets/images/about_us/person.jpg"
import parts from "../../assets/images/about_us/parts.jpg"

const AboutUs = () => {
    return (
        <div className="my-32">
            <div className="flex flex-col lg:flex-row gap-14">
                <div className="lg:w-1/2 relative ">
                    <div className="h-full pb-20 pr-14" >
                        <img src={person} className="h-full w-full object-cover rounded-lg" />
                    </div>

                    <img src={parts} className="absolute right-0 bottom-0 w-80 rounded-lg border-[10px] border-white" />
                </div>
                <div className="lg:w-1/2">
                    <h3 className="text-[#FF3811] text-xl font-bold">About Us</h3>
                    <h1 className="text-[45px] font-bold pr-28 leading-[54px] mt-5">We are qualified & of experience in this field</h1>
                    <p className="mt-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. </p>
                    <p className="mt-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.  </p>
                    <button className="btn btn-orange mt-7">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;