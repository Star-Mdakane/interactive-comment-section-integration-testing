'use client'

import { useComments } from '@/context/CommentsContext'
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CommentVote = ({ score, comment }) => {

    const { commentCount } = useComments()


    console.log(score);
    return (
        <div className='flex items-center justify-around px-2 md:py-2 bg-bg rounded-[10px] h-10 w-25 md:w-10 md:h-25 md:flex-col md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3'>
            <button
                onClick={() => commentCount('inc', comment.id)}
                className='cursor-pointer w-full h-full flex justify-center items-center'>
                <FaPlus className='text-[10px] text-[#C5C6EF]' />
            </button>
            <p className='text-pri text-[16px] leading-[150%] tracking-normal font-medium'>{score}</p>
            <button
                onClick={() => commentCount('dec', comment.id)}
                className='cursor-pointer w-full h-full flex justify-center items-center'>
                <FaMinus className='text-[10px] text-[#C5C6EF]' />
            </button>
        </div>
    )
}

export default CommentVote