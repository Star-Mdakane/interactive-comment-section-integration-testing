'use client'

import { createContext, useContext, useState } from "react";
import data from '@/public/data.json'
import { nanoid } from "nanoid";

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
            content: text,
            createdAt: new Date,
            id: nanoid,
            score: 0,
            user: {
                image: {
                    png: "/images/avatars/image-juliusomo.png",
                    webp: "/images/avatars/image-juliusomo.webp"
                },
                username: "juliusomo"
            },
        }

        setPost(prev => ({
            ...prev,
            comments: [...prev.comments, newComment]
        })
        )
    }

    const addReply = (id, text, val) => {
        const newReply = {
            content: text,
            createdAt: new Date(),
            id: nanoid(),
            score: 0,
            replyingTo: `${val.user.username}`,
            user: {
                image: {
                    png: "/images/avatars/image-juliusomo.png",
                    webp: "/images/avatars/image-juliusomo.webp"
                },
                username: `juliusomo`
            }
        }

        setPost(prev => ({
            ...prev,
            comments: prev.comments.map(comment =>
                comment.id === id ?
                    {
                        ...comment,
                        replies: [...comment.replies, newReply]
                    }
                    :
                    comment
            )
        })
        )
    }

    const addReplyTo = (id, text, val) => {
        const newReply = {
            content: text,
            createdAt: new Date(),
            id: nanoid(),
            score: 0,
            replyingTo: `${val.user.username}`,
            user: {
                image: {
                    png: "/images/avatars/image-juliusomo.png",
                    webp: "/images/avatars/image-juliusomo.webp"
                },
                username: `juliusomo`
            }
        }

        setPost(prev => ({
            ...prev,
            comments: prev.comments.map(comment =>
                comment.id === id ?
                    {
                        ...comment,
                        replies: [...comment.replies, newReply]
                    } :
                    comment
            )
        })
        )
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

    // console.log(comments);

    const value = { setPost, currentUser, comments, replyCount, deleteReply, deleteComment, commentCount, addComment, addReply, addReplyTo }

    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    )
}