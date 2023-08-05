import Container from "./components/Container";
import productsData from "./products.json";

const Item = ({ item }) => {
  const smartphones = item.filter(
    (product) => product.category === "smartphones"
  );

  console.log(smartphones);

  return (
    <ul className="list" data-testid="product-list">
      {smartphones.map((product) => (
        <li key={product.id} className="item" data-testid="product-item">
          <img src={product.thumbnail} alt={product.title} />
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <span>{product.brand}</span>
          <span>{product.price}</span>
        </li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <Container>
      <Item item={productsData} />
    </Container>
  );
}

export default App;
