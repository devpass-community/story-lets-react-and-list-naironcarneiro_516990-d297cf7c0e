import Container from "./components/Container";
import productsData from "./products.json";

const Item = ({ item }) => {
  return (
    <li className="item" data-testid="product-item">
      {item.map((product) => (
        <>
          <img src={product.thumbnail} alt={product.title} />
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <span>{product.brand}</span>
          <span>{product.price}</span>
        </>
      ))}
    </li>
  );
};

function App() {
  return (
    <Container>
      <ul className="list" data-testid="product-list">
        <Item item={productsData} />
      </ul>
    </Container>
  );
}

export default App;
