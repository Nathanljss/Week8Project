import { db } from "@/lib/db";

export default async function PostPage({ params }) {
  const response = await db.query(`SELECT * FROM posts WHERE id= ${params.id}`);
  const post = response.rows;

  return (
    <div className="soloposttitle">
      <h1>Here's that post you wanted: </h1>
      <p>{post.content}</p>
      <h3>Comments:</h3>
    </div>
  );
}
