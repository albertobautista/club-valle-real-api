
const express = require('express');
const galleries = require('../../application/gallery');

const router = express.Router();

  router.get('/getGallery', (req, res) => {
    galleries.getGalleryAlbums()
    .then(result=> res.send(result))
    .catch(err => res.send(err));
  });
  
module.exports = router;
