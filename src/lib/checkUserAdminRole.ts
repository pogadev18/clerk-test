import { currentUser } from '@clerk/nextjs';

// 3rd extra layer of "protection"
export const checkUserAdminRole = async () => {
  try {
    const user = await currentUser();
    const isAdmin = user?.privateMetadata?.role === 'admin' ?? false;
    return { isAdmin, name: user?.firstName };
  } catch (error) {
    console.error(error);
    return { isAdmin: false };
  }
};
