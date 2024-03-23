export let products = [
    {
        id: 1,
        title: "Rebelión en la Granja",
        precio: 3000,
        stock: 5,
        autor: "George Orwell",
        img: "https://images.cdn1.buscalibre.com/fit-in/360x360/68/e0/68e0aac2ed0bfe4c39e0cf16663a5918.jpg",
        category: "internacional"
    },
    {
        id: 2,
        title: "El Túnel",
        precio: 2000,
        stock: 5,
        autor: "Ernesto Sábato",
        category: "nacional",
        img: "https://images.cdn3.buscalibre.com/fit-in/360x360/b5/64/b564d07ef89c10880e519e687f9d51e4.jpg"
    },
    {
        id: 3,
        title: "Puro Fútbol",
        precio: 2500,
        stock: 5,
        autor: "Roberto Fontanarrosa",
        category: "nacional",
        img: "https://images.cdn3.buscalibre.com/fit-in/360x360/83/b4/83b4ff3eb5adfe2a55df65db14abb2fd.jpg"
    },
    {
        id: 4,
        title: "Cien Años de Soledad",
        precio: 5000,
        stock: 5,
        autor: "Gabriel García Marquez",
        category: "internacional",
        img: "https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg"
    }
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      if (products.length > 0) {
        const item = products.find((product) => product.id === id);
        setTimeout(() => {
          if (item) {
            resolve(item);
          } else {
            reject(`No se encuentra el producto con el id ${id}`);
          }
        }, 500);
      } else {
        reject("No hay productos");
      }
    });
  };