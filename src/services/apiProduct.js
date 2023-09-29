import supabase from "../service";

export async function fetchAllProduct() {
  const { data, error } = await supabase.from("products").select("*");
  if (error) {
    throw error;
  }
  return data;
}

//filter discounted products
export async function productsWithDiscount() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .gt("discount", 0)
    .not("category", "eq", "სისტემური ბლოკები");
  if (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
  return data;
}

//filter single product
export async function getSingleProduct(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
  return data;
}

//filter by category
export async function filterByCategory(category) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .limit(6);
  if (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
  return data;
}
//filter by category no limit
export async function filterAllByCategory(sortByPriceLowToHigh = true) {
  let query = supabase.from("products").select("*");

  if (sortByPriceLowToHigh) {
    query = query.order("price", { ascending: true });
  } else {
    query = query.order("price", { ascending: false });
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }

  return data;
}

//last added products
export const fetchLatestProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .not("created_at", "is", null)
    .order("created_at", { ascending: false })
    .limit(8);
  if (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
  return data;
};
