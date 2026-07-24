'use client'

import Comment from "@/components/Comment";
import AddCommentForm from "@/components/AddCommentForm";
import { useComments } from "@/context/CommentsContext";
import ConfirmDelete from "@/components/ConfirmDelete";

export default function Home() {

  const { comments, currentUser, getReplies } = useComments()

  // const userName = currentUser.username;
  // const replies = getReplies(comments);

  // console.log(userName);

  return (
    <div className="w-86 md:w-171 lg:w-182 mx-auto flex flex-col">
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} user={currentUser} replies={comment.replies ?? []} />
      ))}
      <AddCommentForm btnLabel="Send" user={currentUser} />
    </div>
  );
}

