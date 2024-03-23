// import { AgregarDocs } from "../../../AgregarDocs";
import { ProductCard } from "../../common/ProductCard";
import "./ItemListContainer.css"
const ItemList = ({ products }) => {
  return (
    <div className="cards-container">
     {/* <AgregarDocs /> */}
      {products.map(({id, img, title, autor, precio}) => {
        return (
          <ProductCard
            key={id}
            img={img}
            title={title}
            autor={autor}
            precio={precio}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default ItemList;