import supabase from "../service";
const currentDate = new Date();
const datePart = currentDate.toISOString().split("T")[0];
const timePart = currentDate.toTimeString().split(" ")[0];

const formattedDate = `${datePart} ${timePart}`;

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

export const removeOrder = async (orderId) => {
  const { error } = await supabase
    .from("orders")
    .delete()
    .eq("order_id", orderId);
  if (error) {
    console.error(error.message);
    throw error;
  }
};
