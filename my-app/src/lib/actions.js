"use server"; // counts for all functions in this file

import { connectDB } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {
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
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  //   "use server";
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();

    await Post.findByIdAndDelete(id);
    console.log("Deleted from DB");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
};
