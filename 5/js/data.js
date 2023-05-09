import {randomCount} from './util.js';

export const massWithUsersPhoto = [];

class UsersPhotos {
  constructor(id, description, likes, comments) {
    this.id = id;
    this.url = `photos/${id}.jpg`;
    this.description = description;
    this.likes = likes;
    this.comments = comments;
  }
}

export function generateMassWithUsersPhotos(size) {
  for (let i = 0; i < size; i++) {
    const user = new UsersPhotos(
      i + 1,
      'some comment',
      randomCount(15, 200),
      randomCount(0, 200)
    );
    massWithUsersPhoto[i] = user;
  }
}
