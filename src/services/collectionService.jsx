import { getProducts } from "@/data/products";
import { getCollectionData, getCollection } from "@/data/collections";

const products = getProducts();
const collectionData = getCollectionData();

export function getCollections() {
  return getCollection(products, collectionData);
}
