'use client'

import Image from 'next/image';
import React, { useState } from 'react'
import { FaMinus, FaPlus, FaReply } from 'react-icons/fa';
import ReplyForm from "@/components/ReplyForm";


const Reply = ({ reply, user }) => {

    const image = reply.user?.image?.png;
    const username = reply.user.username;

    const [replyInput, setReplyInput] = useState(false)

    const onReply = () => {
        console.log('reply btn clicked');
        setReplyInput(!replyInput)
    }


    return (
        <>
            <div className='flex flex-col mb-4'>
                <div className='h-full md:h-42 flex md:gap-10'>
                    <div className='hidden h-full md:block md:ml-10 w-1 bg-[#E9EBF0]'></div>
                    <div className='bg-white md:h-38 rounded-lg p-4 grid gap-4 md:gap-x-6 grid-cols-2 md:grid-cols-[40px_minmax(250px,1fr)_1fr]'>
                        <div className='w-full flex col-span-full md:row-start-1 md:col-start-2 md:col-span-1 gap-4 items-center'>
                            <Image
                                src={image}
                                alt="avatar"
                                width={32}
                                height={32} />
                            <p className='text-[16px] text-text-bold leading-[150%] tracking-normal font-medium'>{username}</p>
                            <p className='text-[16px] leading-[150%] tracking-normal font-normal'>{reply.createdAt}</p>
                        </div>
                        <p className='col-span-full md:col-start-2 md:col-span-2text-[16px] leading-[150%] tracking-normal font-normal'>
                            <span className='text-pri text-[16px] leading-[150%] tracking-normal font-medium'>
                                @{reply.replyingTo}{" "}
                            </span>
                            {reply.content}
                        </p>
                        <div className='flex items-center justify-around px-2 md:py-2 bg-bg rounded-[10px] h-10 w-25 md:w-10 md:h-25 md:flex-col md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3'>
                            <button className='cursor-pointer w-full h-full flex justify-center items-center'>
                                <FaPlus className='text-[10px] text-[#C5C6EF]' />
                            </button>
                            <p className='text-pri text-[16px] leading-[150%] tracking-normal font-medium'>{reply.score}</p>
                            <button className='cursor-pointer w-full h-full flex justify-center items-center'>
                                <FaMinus className='text-[10px] text-[#C5C6EF]' />
                            </button>
                        </div>
                        <button
                            onClick={onReply}
                            className='flex justify-self-end md:row-start-1  text-pri items-center gap-2 cursor-pointer'>
                            <FaReply className='text-[14px]' />
                            <span className='text-[16px] leading-[150%] tracking-normal font-medium'>Reply</span>
                        </button>
                    </div>
                </div>
                {replyInput && <ReplyForm btnLabel="reply" user={user} reply={reply} />}
            </div>
        </>
    )
}

export default Reply