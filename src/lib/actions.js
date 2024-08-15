'use server';

import { revalidatePath } from "next/cache"
import { Post } from "./models"
import { connectToDb } from "./utils"
import { signIn, signOut } from "./auth";

export const addPost =async (formData) => {
    // const title = formData.get('title');
    // const desc = formData.get('desc');
    // const slug = formData.get('slug');
    // const userId = formData.get('userId');
    const {title,desc,slug,userId} = Object.fromEntries(formData)

    try {
        connectToDb()
        const newPost = new Post({
            title,
            desc,slug,userId
        })

        await newPost.save();
        revalidatePath('/blog');
        console.log('save to db');
    } catch (error) {
        console.log(error);
    return {error:'something went wrong'}
    }   
}


export const deletePost =async (formData) => {

    // const title = formData.get('title');
    // const desc = formData.get('desc');
    // const slug = formData.get('slug');
    // const userId = formData.get('userId');
    const {id} = Object.fromEntries(formData)

    try {
        connectToDb()
        await Post.findByIdAndDelete(id);
        console.log('deleted from database')

        revalidatePath('/blog');
    } catch (error) {
        console.log(error);
    return {error:'something went wrong'}
    }   
}

export const handleGithubLogin = async () => {
    'use server';
    await signIn();
    
}

export const handleLogout = async () =>{
    'use server';
    await signOut();
}