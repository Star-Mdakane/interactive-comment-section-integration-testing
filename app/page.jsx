// 'use client'

import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";
// import ReplyForm from "@/components/ReplyForm";
import post from '@/public/data.json'

export default function Home() {


  const currentUser = post.currentUser;
  const userName = currentUser.username;
  const comments = post.comments;
  console.log(userName);

  return (


    <div className="w-86 md:w-171 lg:w-182 mx-auto flex flex-col">
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} user={currentUser} />
      ))}
      <CommentForm btnLabel="reply" user={currentUser} />
      {/* <ReplyForm btnLabel="reply" user={currentUser} /> */}
    </div>
  );
}

