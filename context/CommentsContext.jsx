'use client'

import { createContext, useContext, useEffect, useState } from "react";
import data from '@/public/data.json'

export const CommentsContext = createContext();

export const useComments = () => {
    const ctx = useContext(CommentsContext)
    if (!ctx) throw new Error("useComments must be inside CommentsProvider");
    return ctx
}

export const CommentsProvider = ({ children }) => {

    const [post, setPost] = useState(data)

    const comments = post.comments ?? []
    const getReplies = (comments) => {
        return comments.map(comment => comment.replies) || [];
    }
    const currentUser = post.currentUser ?? {}

    const createComment = (text) => {
        const newComment = {
            context: text,
            createdAt: new Date(),
            id: Math.floor(Math.random() * 100 + 4),
            score: 5,
            user: {
                image: {},
                username: ""
            },
        }
    }

    // console.log(replies);

    const value = { setPost, currentUser, comments, getReplies }

    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    )
}