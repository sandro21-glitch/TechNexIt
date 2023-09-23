const ProductLength = ({ allProduct }) => {
  return (
    <div>{allProduct ? `ნაპოვნია ${allProduct.length} პროდუქტი` : null}</div>
  );
};

export default ProductLength;
