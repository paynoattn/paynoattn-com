import { Post } from './post';
import * as faker from 'faker';

export function mockPost(): Post {
  return {
    title: faker.lorem.sentence(),
    categories: [ 'development' ],
    imageURL: faker.image.imageUrl(),
    source: 'facebook',
    link: faker.internet.url(),
    preview: `<p>${faker.lorem.paragraph()}</p>`,
    date: new Date().toISOString()
  }
}
