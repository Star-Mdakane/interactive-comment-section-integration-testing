'use client'

import React, { useEffect, useState } from 'react'
import Reply from './Reply';
import { FaMinus, FaPlus, FaReply, FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import CommentForm from './CommentForm';
import { PiPencilSimpleFill } from 'react-icons/pi';
import { formatDistanceToNow } from 'date-fns';
import VoteContainer from './CommentVote';
import { useComments } from '@/context/CommentsContext';
import CommentVote from './CommentVote';
// import ReplyForm from "@/components/ReplyForm";


const Comment = ({ comment, user, replies }) => {

    const image = comment.user?.image?.png;
    const username = comment.user.username;
    const currentUser = user.username === username;

    const { deleteComment, commentCount } = useComments()

    const [timeFormat, setTimeFormat] = useState("")

    // const date = currentUser ? timeFormat : comment.createdAt

    useEffect(() => {
        setTimeFormat(formatDistanceToNow(new Date(Date.now()), { addSuffix: true }))
    }, [])


    // console.log(username);

    const [replyInput, setReplyInput] = useState(false)

    const onReply = () => {
        setReplyInput(!replyInput)
    }

    return (
        <>
            <div className='flex flex-col gap-6 mb-6'>
                <div className='bg-white rounded-lg p-4 grid gap-4 md:gap-x-6 grid-cols-2 md:grid-cols-[40px_3fr_1fr]'>
                    <div className='w-full flex col-span-full md:row-start-1 md:col-start-2 md:col-span-1 gap-4 items-center'>
                        <Image
                            src={image}
                            alt="avatar"
                            width={32}
                            height={32} />
                        <p className='text-[16px] text-text-bold leading-[150%] tracking-normal font-medium'>{username}</p>
                        {currentUser && <p className='text-[13px] leading-[150%] tracking-normal text-white bg-pri rounded-xs px-1 py-0.5 font-normal'>you</p>}
                        <p className='text-[16px] leading-[150%] tracking-normal font-normal'>{currentUser ? timeFormat : comment.createdAt}</p>
                    </div>
                    <p className='col-span-full md:col-start-2 md:col-span-2 text-[16px] leading-[150%] tracking-normal font-normal'>
                        {comment.content}
                    </p>
                    {/* <div className='flex items-center justify-around px-2 md:py-2 bg-bg rounded-[10px] h-10 w-25 md:w-10 md:h-25 md:flex-col md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3'>
                        <button className='cursor-pointer w-full h-full flex justify-center items-center'>
                            <FaPlus className='text-[10px] text-[#C5C6EF]' />
                        </button>
                        <p className='text-pri text-[16px] leading-[150%] tracking-normal font-medium'>{comment.score}</p>
                        <button className='cursor-pointer w-full h-full flex justify-center items-center'>
                            <FaMinus className='text-[10px] text-[#C5C6EF]' />
                        </button>
                    </div> */}
                    <CommentVote score={comment.score} comp="c" comment={comment} />
                    <div className='justify-self-end md:row-start-1 flex items-center'>
                        {currentUser ?
                            (<div className='flex items-center gap-6'>
                                <button
                                    onClick={() => deleteComment(comment.id)}
                                    className='text-pri-red hover:text-pri-red/50 flex justify-self-end md:row-start-1 items-center gap-2 cursor-pointer'>
                                    <FaTrash className='text-[14px]' />
                                    <span className='text-[16px] leading-[150%] tracking-normal font-medium'>Delete</span>
                                </button>
                                <button className='flex justify-self-end md:row-start-1  text-pri hover:text-pri/50 items-center gap-2 cursor-pointer'>
                                    <PiPencilSimpleFill className='text-[14px]' />
                                    <span className='text-[16px] leading-[150%] tracking-normal font-medium'>Edit</span>
                                </button>
                            </div>)
                            :
                            (<button
                                onClick={onReply}
                                className='flex justify-self-end md:row-start-1  text-pri hover:text-pri/50 items-center gap-2 cursor-pointer'>
                                <FaReply className='text-[14px]' />
                                <span className='text-[16px] leading-[150%] tracking-normal font-medium'>Reply</span>
                            </button>)}
                    </div>
                </div>
                {replyInput && <CommentForm btnLabel="reply" user={user} username={username} />}
            </div>

            {replies.map(reply => (
                <Reply key={reply.id} reply={reply} user={user} />
            ))}

        </>

    )
}

export default Comment