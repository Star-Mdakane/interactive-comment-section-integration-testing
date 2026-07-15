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

    const [post, setPost] = useState({})

    useEffect(() => {
        setPost(data)
    }, [])

    console.log(post.comments);

    const value = {}

    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    )
}