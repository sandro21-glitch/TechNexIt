export const calcDiscount = (price, discount) => {
  const discountedPrice = price - price * (discount / 100);
  const roundedDiscountedPrice = Math.round(discountedPrice);

  return roundedDiscountedPrice;
};

export const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat("ka-GE", {
    style: "currency",
    currency: "GEL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);

  return formattedPrice.replace("GEL", "₾"); // Remove the currency code
};
