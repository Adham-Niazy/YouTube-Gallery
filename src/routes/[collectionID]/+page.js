import { error } from '@sveltejs/kit';

export function load({ params }) {
  if (params.collectionID > 1) return {
    collectionID: params.collectionID
  };

  throw error(404, 'Not found');
}