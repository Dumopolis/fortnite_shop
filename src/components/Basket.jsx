import { useContext } from "react";
import { ShopContext } from "../context";


export default function Basket() {
    const { order, handleBasket } = useContext(ShopContext)
    const countThingOnOrder = order.reduce(((acc, obj) => acc + obj.quantity), 0) || 0;
    return (
        <div onClick={handleBasket} className="Basket-Opener Flex-Row-Center  ">
            <svg  className='Basket-Icon' version="1.1"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512" fill="url(#linear-gradient)" >
                <g>
                    <g>
                        <linearGradient id="linear-gradient">
                            <stop offset="0%" stopColor="#305DB2" />
                            <stop offset="100%" stopColor="#843486" />
                        </linearGradient>


                        <path d="m490.1,94.3h-325.6c-7.8,0-12.4,5.5-10.4,13.6l47,161.7c1,4.2 5.2,7.3 10.4,7.3h232.7c5.2,0 9.4-3.1 10.4-7.3l45.9-161.7c1.8-5.3-1-13.6-10.4-13.6zm-53.2,160.7h-217.1l-9.4-32.3h235.9l-9.4,32.3zm14.6-53.3h-247.7l-9.3-32.3h266.4l-9.4,32.3zm15.6-54.2h-278.6l-9.4-32.3h297.5l-9.5,32.3z" />
                        <path d="M107.1,24.3c-1-5.2-5.2-8.3-10.4-8.3H11v20.9h77.2l71,285.9c1,5.2,5.2,8.3,10.4,8.3h275.5v-21.9H178L107.1,24.3z" />
                        <rect width="243.2" x="169.7" y="363.5" height="20.9" />
                        <path d="m400.3,412.5c-23,0-41.7,18.8-41.7,41.7 0,23 18.8,41.7 41.7,41.7s41.7-18.8 41.7-41.7c0.1-22.9-18.7-41.7-41.7-41.7zm0,61.6c-10.4,0-19.8-9.4-19.8-19.8 0-10.4 8.3-19.8 19.8-19.8 11.5,0 19.8,9.4 19.8,19.8 0.1,10.4-9.3,19.8-19.8,19.8z" />
                        <path d="m197.9,412.5c-23,0-41.7,18.8-41.7,41.7 0,23 18.8,41.7 41.7,41.7s41.7-18.8 41.7-41.7c2.84217e-14-22.9-18.8-41.7-41.7-41.7zm0,61.6c-10.4,0-19.8-9.4-19.8-19.8 0-10.4 8.3-19.8 19.8-19.8 10.4,0 19.8,9.4 19.8,19.8-2.84217e-14,10.4-9.4,19.8-19.8,19.8z" />
                    </g>
                </g>
            </svg>
            
            {(countThingOnOrder) ? <span className="Basket-Quantity">{countThingOnOrder}</span> : <span className="basket-quantity">&#128126;</span>}
        </div>
    
    )
}