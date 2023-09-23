import GridControl from "./GridControl";
import ItemsPerPage from "./ItemsPerPage";
import ProductLength from "./ProductLength";

const HeaderFilters = ({
  setIsGrid,
  isGrid,
  allProduct,
  setItemsPerPage,
  itemsPerPage,
}) => {
  return (
    <div className="font-rexFontLight mb-5 grid grid-cols-1 md:grid-cols-[auto,auto,1fr,auto] items-center gap-5">
      <GridControl isGrid={isGrid} setIsGrid={setIsGrid} />
      <ProductLength allProduct={allProduct} />
      <hr />
      <ItemsPerPage
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  );
};

export default HeaderFilters;
