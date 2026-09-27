import { ShelfCollection } from "@/features/shelf-collection/";
import { getCollections } from "@/services/collectionService";
const collections = getCollections();
export default function Homepage() {
  return (
    <>
      {collections.map(({ slug, banner, products }) => (
        <ShelfCollection
          key={slug}
          slug={slug}
          banner={banner}
          products={products}
        ></ShelfCollection>
      ))}
    </>
  );
}
