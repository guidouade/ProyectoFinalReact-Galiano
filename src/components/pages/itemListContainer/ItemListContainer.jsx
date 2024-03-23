import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardSkeleton } from "../../common/CardSkeleton";
import "./ItemListContainer.css";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ProductCard } from "../../common/ProductCard";

const ItemListContainer = () => {

  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    console.log (productsCollection)

    let consulta = productsCollection ; // el va saber a quien pedirle los documentos si a todos o a una parte

    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFiltered;
      console.log (productsCollectionFiltered)
    }
    console.log (consulta)



    getDocs(consulta)
      .then((res) => {
        let arrayLindo = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });

        setProducts(arrayLindo);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) {
    return (
      <div className="cards-container">
        <ProductCard/>
      </div>
    );
  }

  return (
    <>
      <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;