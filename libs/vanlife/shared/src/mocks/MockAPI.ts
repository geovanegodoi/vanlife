import { createServer, Model } from 'miragejs';
import { ReviewModel, VanModel } from '../types';
import vans from './VansData';
import reviews from './ReviewsData';

export function startMockAPI() {
  if (process.env.NODE_ENV === 'production') return;
  return createServer({
    environment: process.env.NODE_ENV,
    models: {
      van: Model.extend<Partial<VanModel>>({}),
      review: Model.extend<Partial<ReviewModel>>({}),
    },
    fixtures: { vans, reviews },
    seeds(server) {
      server.loadFixtures();
    },
    routes() {
      this.urlPrefix = '/api';
      this.get('/vans', (schema, request) => schema.all('van'));
      this.get('/vans/:id', (schema, request) =>
        schema.find('van', request.params.id)
      );
      this.get('/reviews', (schema, request) => schema.all('review'));
    },
  });
}

export default startMockAPI;
