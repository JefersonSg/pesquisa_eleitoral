'use server';

import { cookies } from 'next/headers';

export async function setCookieVoted({
  cookieName,
  cookieValue
}: {
  cookieName: string;
  cookieValue: string;
}) {
  cookies().set(cookieName, cookieValue);
}
