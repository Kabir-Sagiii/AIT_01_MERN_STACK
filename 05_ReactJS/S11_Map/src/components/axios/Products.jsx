import { useState } from "react";
import axios from "axios";
const url = "https://fakestoreapi.com/products";

function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to fetch the data");
      });
  };

  return (
    <div className="p-3">
      <h3 className="text-primary mb-2">Products Data</h3>
      <p className="lead mb-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        quae illo eveniet quod quia eos cumque excepturi ipsa fugit omnis dolore
        officiis iusto, repellendus voluptatum quo, quasi perspiciatis beatae
        tempore doloribus itaque necessitatibus qui! Quod excepturi esse
        tempore! Velit, modi aspernatur autem error ad rerum illum tempore eaque
        quisquam repellat aut, minima voluptate dolores. Quisquam debitis eum
        ducimus repellendus amet officia numquam nostrum at ex laudantium omnis
        optio error dolorum eligendi maiores sunt, labore, nesciunt voluptatum
      </p>
      <button className="btn btn-primary" onClick={getProducts}>
        Get Products
      </button>

      <div>
        {products.length > 0 ? (
          <div className="d-flex flex-wrap justify-content-evenly gap-4 mx-auto my-5">
            {products.map(({ image, title, description, category }) => {
              return (
                <div className="shadow w-25 text-center p-3">
                  <img src={image} width={"100%"} height={210} />
                  <h4 className="text-primary my-3">{title.slice(0, 21)}</h4>
                  <p className="">{description.slice(0, 80)}</p>
                  <h5 className="my-3 h5">{category}</h5>
                  <button className="btn btn-success">Add To Cart</button>
                </div>
              );
            })}
          </div>
        ) : (
          <h3 className="mt-5 text-center text-danger">
            No Products to Display
          </h3>
        )}
      </div>
    </div>
  );
}

export default Products;
