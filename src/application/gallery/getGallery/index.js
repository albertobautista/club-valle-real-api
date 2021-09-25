const {getGallery} = require('./auxiliaries')();


const getGalleryAlbums = async () => {
    return getGallery()
    .catch(err =>console.log("ERROR,", err))

};

module.exports = getGalleryAlbums;
