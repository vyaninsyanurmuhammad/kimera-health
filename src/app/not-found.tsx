import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center">
      <h2 className="w-fit text-3xl font-semibold">404</h2>
      <p className="w-fit">Could not find requested resource</p>
      <Link className="w-fit" href="/">
        Return Home
      </Link>
    </div>
  );
}
