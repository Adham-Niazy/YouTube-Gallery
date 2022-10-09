import { error } from '@sveltejs/kit';

export function load({ params }) {
  if (params.collectionID === 'hello-world') return {
    collectionID: params.collectionID
  };

  throw error(404, 'Not found');
}