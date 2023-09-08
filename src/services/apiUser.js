import supabase from "../service";
export const fetchUserData = async (userId) => {
  if (userId) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .single()
      .eq("user_id", userId);

    if (error) {
      throw new Error("Failed to fetch user data");
    }
    return data;
  }
};

export const updateData = async ({ userId, formData }) => {
  const { error } = await supabase
    .from("users")
    .update({
      name: formData.name,
      address: formData.address,
      number: formData.number,
    })
    .eq("user_id", userId);
  if (error) {
    throw new Error("Failed to update user data");
  }
};
