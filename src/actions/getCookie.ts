'use server';

import { cookies } from 'next/headers';

export async function getCookie({ nameCookie }: { nameCookie: string }) {
  const cookie = cookies().get(nameCookie)?.value;

  return cookie;
}
