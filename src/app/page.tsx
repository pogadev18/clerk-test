import { UserButton } from '@clerk/nextjs';

import { checkUserAdminRole } from '@/lib/checkUserAdminRole';

export default async function Home() {
  const { isAdmin, name } = await checkUserAdminRole();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <UserButton afterSignOutUrl="/" />
      {isAdmin ? (
        <h2 className="mt-5 text-xl">
          Hi, {name}! You are an admin. You can do lots of things here.
        </h2>
      ) : (
        <h2 className="mt-5 text-xl">
          Hi, {name}! You are NOT an admin. Get the fuck out!
        </h2>
      )}
    </main>
  );
}
