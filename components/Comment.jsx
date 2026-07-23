'use client'

import React, { useEffect, useState } from 'react'
import Reply from './Reply';
import { FaReply, FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import CommentForm from './CommentForm';
import { PiPencilSimpleFill } from 'react-icons/pi';
import { formatDistanceToNow } from 'date-fns';
import { useComments } from '@/context/CommentsContext';
import CommentVote from './CommentVote';
import EditComponent from './EditComponent';
import { TbPencilOff } from 'react-icons/tb';

const Comment = ({ comment, user, replies }) => {

    const image = comment.user?.image?.png;
    const username = comment.user.username;
    const currentUser = user.username === username;

    const { deleteComment } = useComments()

    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        const id = setInterval(() => {
            setNow(Date.now());
        }, 60000);

        return () => clearInterval(id);
    }, []);

    const date = new Date(comment.createdAt);

    const displayTime = isNaN(date.getTime())
        ? comment.createdAt
        : formatDistanceToNow(date, {
            addSuffix: true,
            now,
        });

    const isNewReply = comment?.isNew ?? false;

    const [replyInput, setReplyInput] = useState(false)
    const [edit, setEdit] = useState(false)

    const onReply = () => {
        setReplyInput(!replyInput)
    }

    const onEdit = () => {
        setEdit(!edit)
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
                        {isNewReply && <p className='text-[13px] leading-[150%] tracking-normal text-white bg-pri rounded-xs px-1 py-0.5 font-normal'>you</p>}
                        <p className='text-[16px] leading-[150%] tracking-normal font-normal'>{displayTime}</p>
                    </div>
                    {edit ?
                        <EditComponent item={comment} type="com" setEdit={setEdit} />
                        :
                        (<p className='col-span-full md:col-start-2 md:col-span-2 text-[16px] leading-[150%] tracking-normal font-normal'>
                            {comment.content}
                        </p>)
                    }
                    <CommentVote score={comment.score} comment={comment} />
                    <div className='justify-self-end md:row-start-1 flex items-center'>
                        {isNewReply ?
                            (<div className='flex items-center gap-6'>
                                <button
                                    onClick={() => deleteComment(comment.id)}
                                    className='text-pri-red hover:text-pri-red/50 flex justify-self-end md:row-start-1 items-center gap-2 cursor-pointer'>
                                    <FaTrash className='text-[14px]' />
                                    <span className='text-[16px] leading-[150%] tracking-normal font-medium'>Delete</span>
                                </button>
                                <button
                                    onClick={onEdit}
                                    className='flex justify-self-end md:row-start-1  text-pri hover:text-pri/50 items-center gap-2 cursor-pointer'>
                                    {edit ?
                                        <TbPencilOff className='text-[14px]' />
                                        :
                                        <PiPencilSimpleFill className='text-[14px]' />
                                    }
                                    <span className='text-[16px] leading-[150%] tracking-normal font-medium'>
                                        {edit ? 'Cancel' : 'Edit'}
                                    </span>
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
                {replyInput && <CommentForm btnLabel="reply" user={user} username={username} comment={comment} onReply={setReplyInput} />}
            </div>

            {replies.map(reply => (
                <Reply key={reply.id} reply={reply} user={user} comment={comment} />
            ))}

        </>
    )
}

export default Comment