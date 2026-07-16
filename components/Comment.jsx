import React from 'react'
import Reply from './Reply';
import { FaMinus, FaPlus, FaReply } from 'react-icons/fa';
import Image from 'next/image';

const Comment = ({ comment }) => {

    const replies = comment.replies;
    const image = comment.user?.image?.png;
    const username = comment.user.username;
    console.log(comment);

    return (
        <>
            <div className='bg-white rounded-lg p-4 grid gap-4 md:gap-x-6 grid-cols-2 md:grid-cols-[40px_1fr_1fr]'>
                <div className='w-full flex col-span-full md:row-start-1 md:col-start-2 md:col-span-1 gap-4 items-center'>
                    <Image
                        src={image}
                        alt="avatar"
                        width={32}
                        height={32} />
                    <p className='text-[16px] text-text-bold leading-[150%] tracking-normal font-medium'>{username}</p>
                    <p className='text-[16px] leading-[150%] tracking-normal font-normal'>{comment.createdAt}</p>
                </div>
                <p className='col-span-full md:col-start-2 md:col-span-2'>
                    {comment.content}
                </p>
                <div className='flex items-center justify-around px-2 md:py-2 bg-bg rounded-[10px] h-10 w-25 md:w-10 md:h-25 md:flex-col md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3'>
                    <button className='cursor-pointer w-full h-full flex justify-center items-center'>
                        <FaPlus className='text-[10px] text-[#C5C6EF]' />
                    </button>
                    <p className='text-pri text-[16px] leading-[150%] tracking-normal font-medium'>{comment.score}</p>
                    <button className='cursor-pointer w-full h-full flex justify-center items-center'>
                        <FaMinus className='text-[10px] text-[#C5C6EF]' />
                    </button>
                </div>
                <div className='flex justify-self-end md:row-start-1  text-pri items-center gap-2'>
                    <FaReply className='text-[14px]' />
                    <span className='text-[16px] leading-[150%] tracking-normal font-medium'>Reply</span>
                </div>
            </div>
            {replies.map(reply => (
                <Reply key={reply.id} reply={reply} />
            ))}
        </>

    )
}

export default Comment