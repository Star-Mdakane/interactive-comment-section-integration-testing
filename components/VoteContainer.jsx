'use client'

import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const VoteContainer = (score) => {

    const val = score.score
    const [count, setCount] = useState(val)

    const onDec = () => {
        if (count > 0)
            setCount(count - 1)
    }


    console.log(val);
    return (
        <div className='flex items-center justify-around px-2 md:py-2 bg-bg rounded-[10px] h-10 w-25 md:w-10 md:h-25 md:flex-col md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3'>
            <button
                onClick={() => setCount(count + 1)}
                className='cursor-pointer w-full h-full flex justify-center items-center'>
                <FaPlus className='text-[10px] text-[#C5C6EF]' />
            </button>
            <p className='text-pri text-[16px] leading-[150%] tracking-normal font-medium'>{count}</p>
            <button
                onClick={onDec}
                className='cursor-pointer w-full h-full flex justify-center items-center'>
                <FaMinus className='text-[10px] text-[#C5C6EF]' />
            </button>
        </div>
    )
}

export default VoteContainer