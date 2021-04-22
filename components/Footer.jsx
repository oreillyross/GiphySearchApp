import Link from "next/link"

export default function Footer() {
  return (
    <>
      <div className="footer">
        <p>
          <Link href="/">
            <a>Home</a>
          </Link>
        </p>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
        <p>
          A big thanks to <a href="htts://giphy.com">giphy.com</a> for letting
          us use their API
        </p>
      </div>
    </>
  );
}
