'use client'

import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";
import { useComments } from "@/context/CommentsContext";

export default function Home() {

  const { comments, currentUser, getReplies } = useComments()

  const userName = currentUser.username;
  const replies = getReplies(comments);

  // console.log(userName);

  return (


    <div className="w-86 md:w-171 lg:w-182 mx-auto flex flex-col">
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} user={currentUser} replies={comment.replies ?? []} />
      ))}
      <CommentForm btnLabel="reply" user={currentUser} />
    </div>
  );
}

