
'use client'

import { useComments } from '@/context/CommentsContext';
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form';


const CommentForm = ({ user, btnLabel, username }) => {

    const { post, setPost } = useComments()

    const image = user.user?.image?.png || user.image?.png;

    const { register, handleSubmit, resetField } = useForm()
    // console.log(comment);
    const onSubmit = (data) => {
        // console.log(data);
        resetField("text")

        const text = data.text;

        const newComment = {
            content: text,
            createdAt: new Date(),
            id: Math.floor(Math.random * (100 + 4)),
            score: 0,
            user: {
                image: {
                    png: "/images/avatars/image-juliusomo.png",
                    webp: "/images/avatars/image-juliusomo.webp"
                },
                username: `${user.username}`
            },
        }

        setPost(prev => ({
            ...prev,
            comments: [...prev.comments, newComment]
        })

            //  setPost(prev => ({
            //     ...prev,
            //     comments: [...comments, 
            //         replies: [...replies, newReply]]
            // })

        )
        // comments.push(newComment)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='min-h-36 bg-white grid grid-cols-2 md:grid-cols-[32px_1fr_104px] gap-4 rounded-lg p-4'>
            <div className='col-start-1 col-end-3 md:col-start-2 row-start-1'>
                <textarea name="text" rows={3} id=""
                    className='w-full h-full px-4 py-2 focus:outline-text cursor-pointer'
                    placeholder='Add a comment...'
                    defaultValue={username ? `@${username}` : ''}
                    {...register('text')}
                >

                </textarea>
            </div>
            <div className='h-full justify-self-start flex items-center md:place-items-start'>
                <Image
                    src={image}
                    alt="avatar"
                    width={32}
                    height={32} />
                <p className='text-[16px] text-text-bold leading-[150%] tracking-normal font-medium'></p>
            </div>
            <button className='w-26 h-12  items-center justify-center rounded-lg justify-self-end text-[16px] leading-[150%] tracking-normal font-medium bg-pri text-white uppercase cursor-pointer'>
                {btnLabel}
            </button>
        </form>
    )
}

export default CommentForm