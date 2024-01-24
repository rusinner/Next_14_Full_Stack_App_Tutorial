import { Post, User } from "./models";
import { connectDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getPost = async (slug) => {
  try {
    connectDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getUsers = async () => {
  try {
    connectDB();
    const users = await User.findOne();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
