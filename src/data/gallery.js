const gateway = require("../helpers/gateway")();

const gallery = {};

gallery.getGallery= () =>{
  const columns = ["idActivity","name", "description"];
  const qu = `SELECT ga.idGallery,ga.title,img.idImage,img.url FROM gallery_images gaImg
  INNER JOIN gallery ga on ga.idGallery = gaImg.idGallery
  INNER JOIN images img ON img.idImage= gaImg.idImage;`
  return gateway.query(qu);

}






module.exports = gallery;
