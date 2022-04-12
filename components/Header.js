import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="headerStyle">
        <div className="headerContent">
          <Link href="/">
            <a>home</a>
          </Link>
          <Link href="/about">
            <a>about</a>
          </Link>
          <Link href="/projects">
            <a>projects</a>
          </Link>
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </div>
      </div>
    </header>
  );
}
