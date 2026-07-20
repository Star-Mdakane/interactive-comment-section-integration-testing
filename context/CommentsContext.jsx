'use client'

import { createContext, useContext, useState } from "react";
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

    const currentUser = post.currentUser ?? {}

    const addComment = (text) => {
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

    const addReply = () => {
        const newReply = {
            content: text,
            createdAt: new Date(),
            id: Math.floor(Math.random * (100 + 4)),
            score: 0,
            replyingTo: "",
            user: {
                image: {
                    png: "/images/avatars/image-juliusomo.png",
                    webp: "/images/avatars/image-juliusomo.webp"
                },
                username: `${user.username}`
            }
        }
    }

    const editComment = (userId, text) => {

    }

    const deleteComment = (userId) => {

    }

    const value = { setPost, currentUser, comments, }

    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    )
}