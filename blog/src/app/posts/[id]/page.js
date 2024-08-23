export default async function PostPage({ params }) {
  const response = await fetch(
    `https://rzgtlyzkincjifegelcf.supabase.co/posts/${params.id}` // include the params.id value from the URL
  );
  const posts = await response.json(); // parse the response as JSON

  return (
    <div>
      <h1 className="soloposttitle">Here's that post you wanted:{posts.id}</h1>
      <h2>{posts.title}</h2>
      <p>{posts.body}</p>
    </div>
  );
}
