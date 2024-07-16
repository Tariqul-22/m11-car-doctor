import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, price, img } = service
    // console.log(service);
    return (
        <div className="card bg-base-100 border border-[#E8E8E8]">
            <figure className="px-6 pt-6 h-2/3">
                <img src={img} alt="Shoes" className="h-full rounded-xl" />
            </figure>
            <div className="card-body text-start h-1/3">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className='text-xl font-semibold text-orange-600'>Price: ${price}</p>
                    <Link to={`/booking/${_id}`}>
                        <FaArrowRight className='text-orange-600'></FaArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object
}
export default ServiceCard;