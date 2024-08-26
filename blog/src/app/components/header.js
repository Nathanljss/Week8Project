import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>PostEm</h1>
      <nav>
        <Link href="/">Home</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/posts">Posts</Link>
      </nav>
    </header>
  );
}
