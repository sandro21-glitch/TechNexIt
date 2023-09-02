import supabase from "../service";

// create new user
// export async function getNewUser() {
//   const { data, error } = await supabase.auth.signUp({
//     email: "example@email.com",
//     password: "example-password",
//   });
//   if (error) {
//     throw new Error(error.message);
//   }
//   return data;
// }

// sign in user
export async function signInUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

//get user from session
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

//sign out
export async function signOutUser() {
  const { data, error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
