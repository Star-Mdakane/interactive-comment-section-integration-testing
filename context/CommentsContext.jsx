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

    const editComment = (id, text) => {

    }

    const deleteComment = (id) => {
        setPost(prev => ({
            ...prev,
            comments: prev.comments.filter(comment =>
                comment.id !== id
            )
        })
        )
    }

    const deleteReply = (id) => {
        setPost(prev => ({
            ...prev,
            comments: prev.comments.map(comment => ({
                ...comment,
                replies: comment.replies.filter(reply => reply.id !== id)
            })
            ),
        })
        )
    }

    const commentCount = (type, id) => {

        if (type === 'inc') {
            setPost(prev => ({
                ...prev,
                comments: prev.comments.map(comment =>
                    comment.id === id ?
                        {
                            ...comment,
                            score: comment.score + 1
                        }
                        :
                        comment

                )
            })
            )
        } else if (type === 'dec') {
            setPost(prev => ({
                ...prev,
                comments: prev.comments.map(comment =>
                    comment.id === id ?
                        {
                            ...comment,
                            score: comment.score < 1 ? comment.score : comment.score - 1
                        } :
                        comment
                )
            })
            )
        }
    }

    const replyCount = (type, id) => {
        if (type === 'inc') {
            setPost(prev => ({
                ...prev,
                comments: prev.comments.map(comment => ({
                    ...comment,
                    replies: comment.replies.map(reply =>
                        reply.id === id ?
                            {
                                ...reply,
                                score: reply.score + 1
                            } :
                            reply
                    )
                })

                ),
            })
            )
        } else if (type === 'dec') {
            setPost(prev => ({
                ...prev,
                comments: prev.comments.map(comment => ({
                    ...comment,
                    replies: comment.replies.map(reply =>
                        reply.id === id ?
                            {
                                ...reply,
                                score: reply.score < 1 ? reply.score : reply.score - 1
                            } :
                            reply
                    )
                })
                ),
            })
            )
        }
    }

    const value = { setPost, currentUser, comments, replyCount, deleteReply, deleteComment, commentCount }

    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    )
}