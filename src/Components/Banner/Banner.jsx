
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"
import img1 from "../../assets/images/banner/1.jpg"
import img2 from "../../assets/images/banner/2.jpg"
import img3 from "../../assets/images/banner/3.jpg"
import img4 from "../../assets/images/banner/4.jpg"
import img5 from "../../assets/images/banner/5.jpg"
import img6 from "../../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mt-10 rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full " />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                    <div className="pt-24 pl-24 space-y-8 text-white w-2/5">
                        <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-5">
                            <button className="btn btn-orange">Discover More</button>
                            <button className="btn btn-outline text-white rounded-[5px] text-base font-normal">Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 bottom-12 right-12">
                    <a href="#slide6" className="btn btn-circle border-none bg-[#FFFFFF33] hover:bg-[#FFFFFF50] text-white  text-2xl"><IoIosArrowRoundBack /></a>
                    <a href="#slide2" className="btn btn-circle border-none bg-[#FF3811] hover:bg-[#e42904] text-white  text-2xl"><IoIosArrowRoundForward /></a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                    <div className="pt-24 pl-24 space-y-8 text-white w-2/5">
                        <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-5">
                            <button className="btn btn-orange">Discover More</button>
                            <button className="btn btn-outline text-white rounded-[5px] text-base font-normal">Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 bottom-12 right-12">
                    <a href="#slide6" className="btn btn-circle border-none bg-[#FFFFFF33] hover:bg-[#FFFFFF50] text-white  text-2xl"><IoIosArrowRoundBack /></a>
                    <a href="#slide3" className="btn btn-circle border-none bg-[#FF3811] hover:bg-[#e42904] text-white  text-2xl"><IoIosArrowRoundForward /></a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                    <div className="pt-24 pl-24 space-y-8 text-white w-2/5">
                        <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-5">
                            <button className="btn btn-orange">Discover More</button>
                            <button className="btn btn-outline text-white rounded-[5px] text-base font-normal">Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 bottom-12 right-12">
                    <a href="#slide2" className="btn btn-circle border-none bg-[#FFFFFF33] hover:bg-[#FFFFFF50] text-white  text-2xl"><IoIosArrowRoundBack /></a>
                    <a href="#slide4" className="btn btn-circle border-none bg-[#FF3811] hover:bg-[#e42904] text-white  text-2xl"><IoIosArrowRoundForward /></a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                    <div className="pt-24 pl-24 space-y-8 text-white w-2/5">
                        <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-5">
                            <button className="btn btn-orange">Discover More</button>
                            <button className="btn btn-outline text-white rounded-[5px] text-base font-normal">Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 bottom-12 right-12">
                    <a href="#slide3" className="btn btn-circle border-none bg-[#FFFFFF33] hover:bg-[#FFFFFF50] text-white  text-2xl"><IoIosArrowRoundBack /></a>
                    <a href="#slide5" className="btn btn-circle border-none bg-[#FF3811] hover:bg-[#e42904] text-white  text-2xl"><IoIosArrowRoundForward /></a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-lg" />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                    <div className="pt-24 pl-24 space-y-8 text-white w-2/5">
                        <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-5">
                            <button className="btn btn-orange">Discover More</button>
                            <button className="btn btn-outline text-white rounded-[5px] text-base font-normal">Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 bottom-12 right-12">
                    <a href="#slide4" className="btn btn-circle border-none bg-[#FFFFFF33] hover:bg-[#FFFFFF50] text-white  text-2xl"><IoIosArrowRoundBack /></a>
                    <a href="#slide6" className="btn btn-circle border-none bg-[#FF3811] hover:bg-[#e42904] text-white  text-2xl"><IoIosArrowRoundForward /></a>
                </div>
            </div>

            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-lg" />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                    <div className="pt-24 pl-24 space-y-8 text-white w-2/5">
                        <h2 className="text-6xl font-bold ">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-5">
                            <button className="btn btn-orange">Discover More</button>
                            <button className="btn btn-outline text-white rounded-[5px] text-base font-normal">Latest Projects</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-5 bottom-12 right-12">
                    <a href="#slide5" className="btn btn-circle border-none bg-[#FFFFFF33] hover:bg-[#FFFFFF50] text-white  text-2xl"><IoIosArrowRoundBack /></a>
                    <a href="#slide1" className="btn btn-circle border-none bg-[#FF3811] hover:bg-[#e42904] text-white  text-2xl"><IoIosArrowRoundForward /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;