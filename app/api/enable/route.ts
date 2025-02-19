import { draftMode } from "next/headers";

export async function GET(request: Request) {
    (await draftMode()).enable();

    return new Response('Draft mode enabled', { status: 200 });
}
  