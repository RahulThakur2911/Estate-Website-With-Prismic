import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { createClient } from '@/prismicio';

export async function GET(request) {
  const client = createClient();
  const { searchParams } = new URL(request.url);

  const token = searchParams.get('token');
  const documentId = searchParams.get('documentId');

  if (token && documentId) {
    draftMode().enable();
    const url = await client.resolvePreviewURL({ documentID: documentId, token });
    return redirect(url || '/');
  }

  return redirect('/');
}
