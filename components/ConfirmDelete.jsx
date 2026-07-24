'use client'

import { useComments } from '@/context/CommentsContext'
import React from 'react'

const ConfirmDelete = ({ id, type }) => {

    const { setShowDelete, deleteComment, deleteReply } = useComments()

    const onDelete = (type, id) => {
        if (type === 'com') {
            deleteComment(id)
        } else if (type === 're') {
            deleteReply(id)
        }
        setShowDelete(false)
    }

    return (
        <div
            className='fixed inset-0 w-screen min-h-screen z-20 flex justify-center items-center bg-black/20'
        >
            <div
                className='w-86 md:w-100 px-6.5 py-5 md:px-7.5 md:py-6.5 flex flex-col gap-4 md:gap-6 bg-white rounded-lg'
            >
                <p className='text-[24px] leading-[150%] tracking-normal font-medium text-text-bold'>
                    Delete comment
                </p>
                <p className='text-[16px] leading-[150%] tracking-normal font-normal'>
                    Are you sure you want to delete this comment? This will remove the comment and can’t be undone.
                </p>
                <div
                    onClick={() => setShowDelete(false)}
                    className='flex justify-between'>
                    <button
                        className='uppercase w-34 h-12 md:w-40 bg-text text-white rounded-lg text-[16px] leading-[150%] tracking-normal font-medium'
                    >No, cancel</button>
                    <button
                        onClick={() => onDelete(type, id)}
                        className='uppercase w-34 h-12 md:w-40 bg-pri-red text-white rounded-lg text-[16px] leading-[150%] tracking-normal font-medium'
                    >Yes, delete</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDelete