import Link from "next/link";
import Image from "next/image";
import profilePic from "./itsvocs.png";

export default function Logo() {
  return (
    <div>
      <Link href="/" className=" font-mono font-thin">
        <span className="sr-only">
          Itsvocs<span className="text-xl font-bold ">.</span>
          <span className="">dev</span>
        </span>
        <Image
          src={profilePic}
          alt="Vocs Pouani Bild"
          width={50}
          height={50}
          priority
        />
      </Link>
    </div>
  );
}
