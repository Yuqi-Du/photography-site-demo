require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');
const Photo = require('../models/Photo');


/**
 * GET /
 * Homepage 
*/
exports.homepage = async(req, res) => {
  try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const animals = await Photo.find({ 'category': 'animal' }).limit(limitNumber);
    const streets = await Photo.find({ 'category': 'street' }).limit(limitNumber);
    const landscapes = await Photo.find({ 'category': 'landscape' }).limit(limitNumber);
    const photos = {animals,streets,landscapes}
    res.render('index', { title: 'photography site - Home', categories, photos } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
}

/**
 * GET /
 * contactPage 
*/
exports.contactPage = async(req, res) => {
  try {
    res.render('contact', { title: 'photography site - Contact'} );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
}

/**
 * GET /categories
 * Categories 
*/
exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('categories', { title: 'photography site - Categories', categories } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 


/**
 * GET /categories/:id
 * Categories By Id -> id in cassandra
*/
exports.exploreCategoriesByName = async(req, res) => { 
  try {
    let categoryName = req.params.name;
    console.log(categoryName);
    const limitNumber = 20;
    const photosOfCategory = await Photo.find({ 'category': categoryName }).limit(limitNumber);
    res.render('categories', { title: 'photography site  - photos in category', photosOfCategory, categoryName} );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 
 
/**
 * GET /photo/:id
 * photo 
*/
exports.explorePhoto = async(req, res) => {
  try {
    let photoId = req.params.id;
    console.log("123");
    const photo = await Photo.findById(photoId);
    res.render('photo', { title: 'photography site - Photo', photo } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 


/**
 * POST /search
 * Search 
*/
exports.searchRecipe = async(req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    // let recipe = await Photo.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
    let photo = await Photo.find( { 'name' : { '$eq' : searchTerm }});

    res.render('search', { title: 'photography site - Search', photo } );
  } catch (error) {
    res.status(500).send({message: error.message || "Error Occured" });
  }
  
}

/**
 * GET /explore-latest
 * Explplore Latest 
*/
exports.exploreLatest = async(req, res) => {
  try {
    const limitNumber = 20;
    const recipe = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);
    res.render('explore-latest', { title: 'Cooking Blog - Explore Latest', recipe } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 



/**
 * GET /explore-random
 * Explore Random as JSON
*/
exports.exploreRandom = async(req, res) => {
  try {
    let count = await Recipe.find().countDocuments();
    let random = Math.floor(Math.random() * count);
    let recipe = await Recipe.findOne().skip(random).exec();
    res.render('explore-random', { title: 'Cooking Blog - Explore Latest', recipe } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 


/**
 * GET /add-photo
 * add photo
*/
exports.addPhoto = async(req, res) => {
  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');
  res.render('add-photo', { title: 'photography site - Add Photo', infoErrorsObj, infoSubmitObj  } );
}

/**
 * POST /add-photo
 * add photo
*/
exports.addPhotoOnPost = async(req, res) => {
  try {

    let imageUploadFile;
    let uploadPath;
    let newImageName;

    if(!req.files || Object.keys(req.files).length === 0){
      console.log('No Files where uploaded.');
    } else {

      imageUploadFile = req.files.image;
      newImageName = Date.now() + imageUploadFile.name; //avoid duplication

      uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

      imageUploadFile.mv(uploadPath, function(err){
        if(err) return res.satus(500).send(err);
      })

    }
    
    const newPhoto = new Photo({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      image: newImageName
    });

    await newPhoto.save();

    req.flash('infoSubmit', 'photo has been added.')
    res.redirect('/add-photo');
  } catch (error) {
    // res.json(error);
    req.flash('infoErrors', error);
    res.redirect('/add-photo');
  }
}




// Delete Recipe
// async function deleteRecipe(){
//   try {
//     await Recipe.deleteOne({ name: 'New Recipe From Form' });
//   } catch (error) {
//     console.log(error);
//   }
// }
// deleteRecipe();


// Update Recipe
// async function updateRecipe(){
//   try {
//     const res = await Recipe.updateOne({ name: 'New Recipe' }, { name: 'New Recipe Updated' });
//     res.n; // Number of documents matched
//     res.nModified; // Number of documents modified
//   } catch (error) {
//     console.log(error);
//   }
// }
// updateRecipe();
