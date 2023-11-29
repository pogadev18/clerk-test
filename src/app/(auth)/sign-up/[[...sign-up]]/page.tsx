import Link from 'next/link';

// 2nd layer of protection - the sign-up functionality from clerk will redirect here, which is an empty page
export default function Page() {
  return (
    <section>
      you cannot sign up for this application <Link href="/">go back home</Link>
    </section>
  );
}
