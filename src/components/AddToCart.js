
import {  toast } from 'react-toastify';


const AddToCart = (product,setCardItems, cardItems, total, setTotal) => {
   
       toast.success('Added to cart');
        const exsistingItem = cardItems.find((item) => item.id === product.id);
        if (exsistingItem) {
          const updatedItems = cardItems.map((product) =>
            product.id === exsistingItem.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          );
          setCardItems(updatedItems);
        } else {
          setCardItems([...cardItems, { ...product, quantity: 1 }]);
        }
        setTotal(total + product.price);

  
}

export default AddToCart