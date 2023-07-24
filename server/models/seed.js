
console.log(123)

const mongoose = require('./database');

const Category = require('./Category');
const Photo = require('./Photo');

async function createCategories() {
  // await connect();
  await Category.db.dropCollection('categories');
  await Category.createCollection();

  await Category.create({
    name: 'landscape',
    image: 'montery.png',
  });

  await Category.create({
    name: 'animal',
    image: 'seal.png',
  });

  await Category.create({
    name: 'street',
    image: 'park1.png',
  });


  const categories = await Category.find();
  console.log('done', categories.length, categories);
  // process.exit(0);
}



async function createPhotos() {
  // await connect();
  await Photo.db.dropCollection('photos');
  await Photo.createCollection();

  await Photo.create({
    name: 'dog',
    description: 'dog',
    category : 'animal',
    image: 'dog.png',
  });

  await Photo.create({
    name: 'park',
    description: 'park',
    category : 'street',
    image: 'park.png',
  });

  await Photo.create({
    name: 'hamster',
    description: 'hamster',
    category : 'animal',
    image: 'hamster.png',
  });

  await Photo.create({
    name: 'tree1',
    description: 'tree1',
    category : 'landscape',
    image: 'tree1.png',
  });

  await Photo.create({
    name: 'park1',
    description: 'park1',
    category : 'street',
    image: 'park1.png',
  });

  await Photo.create({
    name: 'seal',
    description: 'seal',
    category : 'animal',
    image: 'seal.png',
  });
  await Photo.create({
    name: 'montery',
    description: 'montery',
    category : 'landscape',
    image: 'montery.png',
  });



  const photos = await Photo.find();
  console.log('done', photos.length, photos);
  // process.exit(0);

}

createCategories();
createPhotos();
// process.exit(0);

