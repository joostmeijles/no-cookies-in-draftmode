import { cookies, draftMode } from "next/headers";

export const dynamic = 'force-static';

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const draft = await draftMode();
  
  if (draft.isEnabled) {
    const cookieValues = await cookies();
    console.log(cookieValues);
  }

  return <span>Draft mode: {draft.isEnabled ? 'enabled': 'disabled'}</span>;
}
