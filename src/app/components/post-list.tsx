'use client'

import PostCard from "./post-card"
import { type Post } from "@/app/types/posts"
import { deletePost } from "@/app/actions/delete-post-action"

export function PostList({posts}: { posts: Post[] | null; deletePost: (postId: string) => void }){
    return(
        <>
        {
        posts?.map(post =>{
          const {
            id,
            user,
            content
          } = post
          
          const {
            name: userFullName,
            avatar_url: avatarUrl,
            user_name: userName
            
          } = user

          return (
            <PostCard
            key={id} 
            id={id}
            content={content}
            userName={userName} 
            userFullName={userFullName} 
            avatarUrl={avatarUrl}
            onDelete={() => deletePost(id)}/>
          )
        })
      }
        </>
    )
}