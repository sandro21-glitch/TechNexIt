import supabase from "../service";
const currentDate = new Date();
const formattedDate = currentDate.toISOString();

export const insertUserOrder = async (userId, userOrder) => {
  const { error } = await supabase.from("orders").insert({
    user_id: userId,
    user_name: userOrder.name,
    user_number: userOrder.number,
    product_price: userOrder.price,
    delivery_method: userOrder.delivery,
    payment_method: userOrder.payment,
    bank: userOrder.bank,
    order_date: formattedDate,
  });
  if (error) {
    console.error(error.message);
    throw error;
  }
};

export const getUserOrders = async (userId) => {
  const { data, error } = await supabase
    .from("orders")
    .select()
    .eq("user_id", userId);
  if (error) {
    console.error(error.message);
    throw error;
  }
  return data;
};
