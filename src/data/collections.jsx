export function getCollectionData() {
  return [
    {
      id: "col-001",
      name: "Haunted Dollhouse",
      slug: "haunted-dollhouse",
      banner: {
        video: "/src/assets/video/haunteddollhouse.mp4",
      },
    },
    {
      id: "col-002",
      name: "MM Crew",
      slug: "mmcrew",
      banner: {
        image: "/src/assets/video/mmcrew.webp",
      },
    },
    {
      id: "col-003",
      name: "Hotdog",
      slug: "hotdog",
      banner: {
        video: "/src/assets/video/hotdog.mp4",
      },
    },
  ];
}

export function groupProductByCollection(products) {
  return products.reduce((acc, product) => {
    const key = product.collectionSlug;
    acc[key] ??= [];
    acc[key].push(product);
    return acc;
  }, {});
}

export function getCollection(products, collections) {
  const grouped = groupProductByCollection(products);
  return collections.map((col) => {
    return {
      ...col,
      products: grouped[col.slug] ?? [],
    };
  });
}
