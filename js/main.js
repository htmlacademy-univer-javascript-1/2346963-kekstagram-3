const randomCount = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min) + min);
const checkStrLength = (str, maxLenght) => str.length <= maxLenght;

let massWithUsersPhoto = [];

function UsersPhotos(id, description, likes, comments) {
  this.id = id;
  this.url = `photos/${id}.jpg`;
  this.description = description;
  this.likes = likes;
  this.comments = comments;
}

function generateMassWithObjects(count) {
  for (let i = 0; i < count; i++) {
    let user = new UsersPhotos(
      i + 1,
      "sda",
      randomCount(15, 200),
      randomCount(0, 200)
    );
    massWithUsersPhoto[i] = user;
  }
}
