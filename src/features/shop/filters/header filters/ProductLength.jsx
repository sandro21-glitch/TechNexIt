const ProductLength = ({ allProduct }) => {
  return (
    <div>{allProduct ? `${allProduct.length} პროდუქტი მოიძებნა` : null}</div>
  );
};

export default ProductLength;
