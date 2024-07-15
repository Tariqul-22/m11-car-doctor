

const MyBookingRow = ({ booking, handleDelete, handleBookingConfirm}) => {
    const { _id, img, service, amount, date, status } = booking



    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-7">
                    <div className="avatar">
                        <div className="w-36 h-36 rounded-xl">
                            {
                                img && <img src={img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="font-semibold text-xl">{service}</div>
                        <div className="opacity-50">Color: Green</div>
                        <div className="opacity-50">Size: S</div>
                    </div>
                </div>
            </td>
            <td className="text-xl font-semibold">{amount}</td>
            <td className="text-xl font-medium">{date}</td>
            <th>
                {
                    status === 'confirm'
                    ? 
                    <button className="btn btn-outline btn-success">Approved</button>
                    :
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-orange py-2 px-5 rounded-lg font-semibold">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default MyBookingRow;