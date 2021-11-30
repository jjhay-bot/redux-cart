import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMMY = [
  {
    id: 'p1',
    price: 6,
    title: 'first book',
    description: 'first wrote',
  },
  {
    id: 'p2',
    price: 3,
    title: 'second book',
    description: 'second wrote',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMMY.map((product) =>(
          <ProductItem
            key= {product.id}
            id= {product.id}
            title= {product.title}
            price= {product.price}
            description= {product.description}
          />
        ))}        
      </ul>
    </section>
  );
};

export default Products;
