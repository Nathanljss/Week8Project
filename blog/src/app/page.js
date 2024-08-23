import pg from "pg";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function HomePage() {
  async function handleSavePost(formData) {
    "use server";
    console.log("Saving post to the database...");
    const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });
    const title = formData.get("title");
    const content = formData.get("content");
    await db.query(`INSERT INTO posts (title, content) VALUES ($1, $2)`, [
      title,
      content,
    ]);
    console.log("Post saved!");
    revalidatePath("/posts");
    redirect("/posts");
  }
  return (
    <>
      <br></br>
      <br></br>
      <h1 className="tagline">Post &apos;em if you got &apos;em</h1>
      <form action={handleSavePost}>
        <label htmlFor="title">Your name: </label>
        <input id="title" name="title" type="text" required />
        <label htmlFor="content"> Your message: </label>
        <input id="content" name="content" type="text" required />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
