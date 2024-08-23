import { db } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import commentIcon from "@/../public/speech-bubble.png";
import binIcon from "@/../public/recycle-bin.png";
import Header from "../components/header";

export default async function PostsPage({ searchParams }) {
  console.log("searchParams", searchParams);
  const result = await db.query(`SELECT * FROM posts`);
  const posts = result.rows;

  if (searchParams.sort === "desc") {
    posts.reverse();
  }

  return (
    <div className="content">
      <h1 className="posthead">BEHOLD! POSTS!</h1>
      <br></br>
      <Link className="sorting" href="./posts?sort=asc">
        Newest first
      </Link>
      &nbsp;&nbsp;
      <Link className="sorting" href="./posts?sort=desc">
        Oldest first
      </Link>
      {posts.map(function (posts) {
        return (
          <ul key={posts.id}>
            <li>
              {posts.title} says: {posts.content} &nbsp;&nbsp;&nbsp;
              <Link href="posts/id">
                <Image
                  className="commentIcon"
                  alt="Comments"
                  src={commentIcon}
                />
              </Link>
              <button className="binbutton">
                <Image className="binIcon" alt="Delete" src={binIcon} />
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
