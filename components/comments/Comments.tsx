import { ClientSideSuspense } from '@liveblocks/react';
import { CommentsOverlay } from './CommentsOverlay';

export const Comments = () => {
  return (
    <ClientSideSuspense fallback={null}>
        {() => <CommentsOverlay />}
    </ClientSideSuspense>
  );
}

