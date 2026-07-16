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
            <div className='bg-white rounded-lg p-4'>
                <div className='flex md:flex-col'>
                    <button>
                        <FaPlus />
                    </button>
                    <p>{comment.score}</p>
                    <button>
                        <FaMinus />
                    </button>
                </div>
                <div className='flex'>
                    <Image
                        src={image}
                        alt="avatar"
                        width={32}
                        height={32} />
                    <p>{username}</p>
                    <p>{comment.createdAt}</p>
                </div>
                <p>
                    {comment.content}
                </p>
                <div className='flex'>
                    <FaReply />
                    <span>Reply</span>
                </div>
            </div>
            {replies.map(reply => (
                <Reply key={reply.id} reply={reply} />
            ))}
        </>

    )
}

export default Comment