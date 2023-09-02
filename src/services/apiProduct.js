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
