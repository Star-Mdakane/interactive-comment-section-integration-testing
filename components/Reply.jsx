'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaReply, FaTrash } from 'react-icons/fa';
import ReplyForm from "@/components/ReplyForm";
import { PiPencilSimpleFill } from 'react-icons/pi';
import { formatDistanceToNow } from 'date-fns';
import { useComments } from '@/context/CommentsContext';
import ReplyVote from './ReplyVote';



const Reply = ({ reply, user, comment }) => {


    const image = reply.user?.image?.png;
    // console.log(reply);
    const username = reply?.user.username;
    const currentUser = user.username === username;

    const { deleteReply } = useComments()

    const [now, setNow] = useState(Date.now());

    useEffect(() => {
        const id = setInterval(() => {
            setNow(Date.now());
        }, 60000);

        return () => clearInterval(id);
    }, []);

    const date = new Date(reply.createdAt);

    const displayTime = isNaN(date.getTime())
        ? reply.createdAt
        : formatDistanceToNow(date, {
            addSuffix: true,
            now,
        });

    const [replyInput, setReplyInput] = useState(false)

    const onReply = () => {
        // console.log('reply btn clicked');
        setReplyInput(!replyInput)
    }

    const rep = reply.replyingTo

    // console.log(`rest: ${rest},
    //     content: ${reply.content}
    //     `);

    return (
        <>
            <div className='flex flex-col mb-4'>
                <div className='w-full h-full md:h-42 flex md:gap-10'>
                    <div className='hidden h-full md:block md:ml-10 w-1 bg-[#E9EBF0]'></div>
                    <div className='w-full bg-white md:h-38 rounded-lg p-4 grid gap-4 md:gap-x-6 grid-cols-2 md:grid-cols-[40px_3fr_1fr]'>
                        <div className='w-full flex col-span-full md:row-start-1 md:col-start-2 md:col-span-1 gap-4 items-center'>
                            <Image
                                src={image}
                                alt="avatar"
                                width={32}
                                height={32} />
                            <p className='text-[16px] text-text-bold leading-[150%] tracking-normal font-medium'>{username}</p>
                            {currentUser && <p className='text-[13px] leading-[150%] tracking-normal text-white bg-pri rounded-xs px-1 py-0.5 font-normal'>you</p>}

                            <p className='text-[16px] leading-[150%] tracking-normal font-normal'>{displayTime}</p>
                        </div>
                        <p className='col-span-full md:col-start-2 md:col-span-2text-[16px] leading-[150%] tracking-normal text-text text-[16px] font-normal'>
                            <span className={`font-medium text-pri`}>
                                @{rep}{" "}
                            </span>
                            {reply.content}
                        </p>

                        <ReplyVote score={reply.score} reply={reply} />
                        <div className='justify-self-end md:row-start-1 flex items-center'>
                            {currentUser ?
                                (<div className='flex items-center gap-6'>
                                    <button
                                        onClick={() => deleteReply(reply.id)}
                                        className='text-pri-red hover:text-pri-red/50 flex justify-self-end md:row-start-1 items-center gap-2 cursor-pointer'>
                                        <FaTrash className='text-[14px]' />
                                        <span className='text-[16px] leading-[150%] tracking-normal font-medium'>Delete</span>
                                    </button>
                                    <button className='flex justify-self-end md:row-start-1  text-pri hover:text-pri/50 items-center gap-2 cursor-pointer'>
                                        <PiPencilSimpleFill className='text-[14px]' />
                                        <span className='text-[16px] leading-[150%] tracking-normal font-medium'>Edit</span>
                                    </button>
                                </div>)
                                : (<button
                                    onClick={onReply}
                                    className='flex justify-self-end md:row-start-1  text-pri hover:text-pri/50 items-center gap-2 cursor-pointer'>
                                    <FaReply className='text-[14px]' />
                                    <span className='text-[16px] leading-[150%] tracking-normal font-medium'>Reply</span>
                                </button>)}
                        </div>

                    </div>
                </div>
                {replyInput && <ReplyForm btnLabel="reply" user={user} reply={reply} comment={comment} />}
            </div>
        </>
    )
}

export default Reply