"use server"; // counts for all functions in this file

import { connectDB } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (prevState, formData) => {
  //   "use server";
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("Saved to DB");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  // "use server";
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();

    await Post.findByIdAndDelete(id);
    console.log("Deleted from DB");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  //   "use server";
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectDB();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    console.log("Saved to DB");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  //   "use server";
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("Deleted from DB");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

//LOGIN

export const handleGitHubLogin = async () => {
  "use server";
  await signIn("github");
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Wrong username or password" };
    }
    throw error;
  }
};

//LOGOUT

export const handleLogout = async () => {
  "use server";
  await signOut();
};

//REGISTER

export const register = async (previousState, formData) => {
  const { username, email, password, img, confirmPassword } =
    Object.fromEntries(formData);
  if (password !== confirmPassword) {
    return { error: "Passwords do not match!" };
  }

  try {
    connectDB();
    const user = await User.findOne({ username });

    if (user) {
      return { error: "User already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
