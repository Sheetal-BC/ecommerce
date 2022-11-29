import React from "react";
import ProductList from "./ProductList";

import "./Product.css";

const productsArray = [
  {
    id: 1,
    title: "Essential oil",
    price: 100,
    quantity: 1,
    imageUrl:
      "https://media.istockphoto.com/id/1178460236/photo/cannabis-cbd-oil-hemp-products-cannabis-oil-extracts-in-jars-patient-medical-marijuana-and.jpg?s=612x612&w=0&k=20&c=CMEqrxLW00bQwFxhUq3pOlCwQIiggnp6sQmKAgD8pnE=",
    description: "Alternative therapy with herbs",
  },
  {
    id: 2,
    title: "Essential oil",
    price: 200,
    quantity: 1,
    imageUrl:
      "https://media.istockphoto.com/id/907874168/photo/bottles-of-essential-oil-with-herbs-and-flowers-on-a-white-background.jpg?s=612x612&w=0&k=20&c=XvHpbEaStDGOicZ55bkkFxfMa0s0umOKPia93gX5oc8=",
    description: "Essential oil with herbs",
  },
  {
    id: 3,
    title: "Herbal Oil",
    price: 250,
    quantity: 1,
    imageUrl:
      "https://media.istockphoto.com/id/585048326/photo/herbal-oil-and-lavender-flowers.jpg?s=612x612&w=0&k=20&c=tihq92dFcu5tc0-csgDRSH_q3VLQ7W7eRDbOHl4K2OA=",
    description: "Herbal oil with lavender flowers",
  },
  {
    id: 4,
    title: "Aloevera",
    price: 150,
    quantity: 1,
    imageUrl:
      "https://media.istockphoto.com/id/1320432195/photo/aloe-vera-and-aloe-gel-face-mask.jpg?s=612x612&w=0&k=20&c=SPEKEiz_NpQzAN2oD0lXoDWYgkXFRSpohDXt21TZnPs=",
    description: "Aloevera gel face mask",
  },
  {
    id: 5,
    title: "Termeric Powder",
    price: 80,
    quantity: 1,
    imageUrl:
      "https://media.istockphoto.com/id/1254503729/photo/golden-turmeric-milk.jpg?s=612x612&w=0&k=20&c=-_Od0tCZZ42WFDMhYgo6CKOJ1hXXo6MAOgGg137KCpk=",
    description: "Pure golden turmeric powder",
  },
  {
    id: 6,
    title: "Sage Tea",
    price: 80,
    quantity: 1,
    imageUrl:
      "https://media.istockphoto.com/id/1048005148/photo/sage-tea-and-sage-leaves.jpg?s=612x612&w=0&k=20&c=igzJkVAmtibqF_2yfGT60QPI8tes0ekne7LP-pTRPb8=",
    description: "Sage tea made of sage leaves",
  },
  {
    id: 7,
    title: "Tea Powder",
    price: 199,
    quantity: 1,
    imageUrl:
      "https://media.istockphoto.com/id/1160927215/photo/tea-powder-with-ginseng.jpg?s=612x612&w=0&k=20&c=XiMqc6Abggn5-uYtg2ffOty1e7_cawlXI2AXtDQcQfg=",
    description: "Tea powder made with ginseng",
  },
  {
    id: 8,
    title: "Mint Oil",
    price: 99,
    quantity: 1,
    imageUrl:
      "https://media.istockphoto.com/id/492188846/photo/small-bottle-of-essential-mint-oil.jpg?s=612x612&w=0&k=20&c=Wq_nY_sLgmRMfSEG1TmSv57iB9vh4dQ2_n25mc2ltig=",
    description: "Bottle of essential mint oil",
  },
  {
    id: 9,
    title: "Avacado Oil",
    price: 400,
    quantity: 1,
    imageUrl:
      "https://media.istockphoto.com/id/938702526/photo/avocado-oil-on-white-wooden.jpg?s=612x612&w=0&k=20&c=xXI5Xqkw9e3WdRDGFtXvrhy-SiLem63KQVIWv5bq8t4=",
    description: "Oil with organic avacado",
  },
  {
    id: 10,
    title: "Mushroom",
    price: 300,
    quantity: 1,
    imageUrl:
      "https://media.istockphoto.com/id/615078692/photo/dried-cordyceps-militaris-mushroom.jpg?s=612x612&w=0&k=20&c=1XUPhhHPTUpkutVUJrNrqaY90ury8tvk4b8eUrTxCaM=",
    description: "Dried militaris mushroom",
  },
  {
    id: 11,
    title: "Honey",
    price: 200,
    quantity: 1,
    imageUrl:
      "https://media.istockphoto.com/id/1272903568/photo/honey-bee-and-honeycomb-with-honey-dipper-on-wooden-table-beekeeping-concept.jpg?s=612x612&w=0&k=20&c=tYGux2m3W4tQwrvjibL4gre1G5mPk8LUSXqyvcQvlsg=",
    description: "Organic pure honey",
  },
  {
    id: 12,
    title: "Rose Water",
    price: 150,
    quantity: 1,
    imageUrl:
      "https://media.istockphoto.com/id/506669699/photo/rose-water-and-pink-beautiful-flower-macro-horizontal.jpg?s=612x612&w=0&k=20&c=wXPhesXJvhQBrFpcQnoQt7SYC-KB9PwUTNo-MGGRmwE=",
    description: "Organic rose water",
  },
];

console.log(productsArray);
function Product() {
  const productList = productsArray.map((product) => (
    <ProductList
      id={product.id}
      key={product.id}
      title={product.title}
      price={product.price}
      quantity={product.quantity}
      img={product.imageUrl}
      description={product.description}
    />
  ));
  return (
    <div>
      <ul className="container">{productList}</ul>
    </div>
  );
}

export default Product;
