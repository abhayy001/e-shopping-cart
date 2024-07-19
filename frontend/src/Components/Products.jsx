import {products} from '../data'
import {addToCart} from '../Features/cartSlice'
import { useDispatch } from 'react-redux'


const Products = () =>{
    const dispatch = useDispatch()

    const handleAddtoCart = (item)=>{
        dispatch(addToCart(item))
    }
    return(
        <>
        <div className='products-container'>
            {products.map((item =>{
                return(
                <div className='products'>
                    <img src={item.image} alt="image" />
                    <h2>{item.title}</h2>
                    <h3>{item.price}</h3>
                    <div className='addtocart-btn'>
                        <button onClick={()=> handleAddtoCart(item)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            )
            }))}
        </div>
        </>
    )
}

export default Products