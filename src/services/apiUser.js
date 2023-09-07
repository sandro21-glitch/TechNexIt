import supabase from "../service";
export const fetchUserData = async (id) => {
  const { data, error } = await supabase
    .from("users")
    .select("id, email, name, address, phonenumber")
    .single()
    .eq("id", id);

  if (error) {
    throw new Error("Failed to fetch user data");
  }

  return data;
};

export const insertUserData = async (userData) => {
  const { data, error } = await supabase
    .from("users")
    .insert({
      email: userData.email,
      name: userData.name,
      address: userData.address,
      number: userData.number,
    })
    .single();

  if (error) {
    throw new Error("Failed to insert data");
  }

  return data;
};
