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

export const resetPassword = async (email) => {
  if (email) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      throw new Error("Failed to reset password");
    }
    return data;
  }
};

export const newPassword = async (password) => {
  await supabase.auth.updateUser({ password });
};

export const findUserEmail = async (email) => {
  const { data, error } = await supabase
    .from("users")
    .select("email")
    .eq("email", email);

  if (error) {
    throw new Error("Failed to fetch user data");
  }
  return data;
};
