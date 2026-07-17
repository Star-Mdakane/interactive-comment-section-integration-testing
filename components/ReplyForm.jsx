import Image from 'next/image'
import React from 'react'

const CommentForm = ({ user, btnLabel, reply }) => {

    const image = user.user?.image?.png || user.image?.png;

    return (
        <div className='h-full w-full flex md:gap-10'>
            <div className='hidden h-full min-h-36 md:block md:ml-10 w-0.5 bg-[#E9EBF0]'></div>
            <form className='w-full bg-white grid grid-cols-2 md:grid-cols-[32px_1fr_104px] gap-4 rounded-lg p-4'>
                <div className='col-start-1 col-end-3 md:col-start-2 row-start-1'>
                    <textarea name="text" rows={3} id=""
                        className='w-full h-full px-4 py-2 focus:outline-text'
                        placeholder='Add reply...'
                        defaultValue={`@${reply.user.username}`}
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
        </div>
    )
}

export default CommentForm