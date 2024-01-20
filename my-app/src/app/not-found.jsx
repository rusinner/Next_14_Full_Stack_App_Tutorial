import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not found</h2>
      Sorry,the page you are looking for does not exist.
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
