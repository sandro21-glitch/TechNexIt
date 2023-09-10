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
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    throw new Error("Failed to reset password");
  }
  return data;
};

export const newPassword = async (password) => {
  supabase.auth.onAuthStateChange(async (event, session) => {
    if (event == "PASSWORD_RECOVERY") {
      const { data, error } = await supabase.auth.updateUser({
        password,
      });

      if (data) alert("Password updated successfully!");
      if (error) alert("There was an error updating your password.");
    }
  });
};
