
import './Card.css';



export default function Card(props) {
    return (

        <div className="nm-card flex flex-col p-4 m-4 max-w-sm rounded group" >
            <div className="group-hover:opacity-60">
                <img className="w-full px-4 py-4 bg-cover" src={props.saleItem.image} alt="Sunset in the mountains"></img>
            </div>
            <div className="grow px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.saleItem.title}</div>
                <p className="text-gray-700 text-base">
                    {props.saleItem.description}
                </p>
            </div>
            <div className="align-bottom px-6 pt-4 pb-2" >
                <h3 className="align-bottom mt-4 text-sm text-gray-700">price</h3>
                <p className="align-bottom mt-1 text-lg font-medium text-gray-900">${props.saleItem.price}</p><br></br>
                <button className="rounded-full nm-flat-gray-200 hover:nm-flat-gray-200-lg leading-5 px-8 py-4 uppercase font-bold tracking-widest transition duration-200 ease-in-out transform hover:scale-110">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}


