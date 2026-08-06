import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link href="/">
          <Image src="/img/placeholder.jpg" alt="icon" width={60} height={60} />
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
