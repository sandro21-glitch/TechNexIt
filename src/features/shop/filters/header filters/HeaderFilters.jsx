import GridControl from "./GridControl";
import ProductLength from "./ProductLength";

const HeaderFilters = ({ setIsGrid, isGrid, allProduct }) => {
  return (
    <div className="font-rexFontLight mb-5 grid grid-cols-1 md:grid-cols-[auto,auto,1fr] items-center gap-5">
      <GridControl isGrid={isGrid} setIsGrid={setIsGrid} />
      <ProductLength allProduct={allProduct} />
      <hr />
    </div>
  );
};

export default HeaderFilters;
