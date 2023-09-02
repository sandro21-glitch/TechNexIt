import supabase from "../service";

export async function getPcProducts() {
  const { error, data } = await supabase.from("pc").select("*");
  if (error) {
    console.error(error.message);
    throw error;
  }
  return data;
}

export async function getSelectedPc(category) {
  const { error, data } = await supabase
    .from("pc")
    .select("*")
    .eq("category", category);
  if (error) {
    console.error(error.message);
    throw error;
  }
  return data;
}

export async function getSinglePc(id) {
  const { error, data } = await supabase
    .from("pc")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error(error.message);
    throw error;
  }
  return data;
}
