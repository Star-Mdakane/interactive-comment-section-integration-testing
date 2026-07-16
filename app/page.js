import Comment from "@/components/Comment";
import post from "@/public/data.json"

export default function Home() {

  const currentUser = post.currentUser;
  const userName = currentUser.username;
  const comments = post.comments;
  console.log(comments);

  return (


    <div className=" w-86 md:w-171 lg:w-182 mx-auto flex flex-col gap-4 md:gap-6">
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
