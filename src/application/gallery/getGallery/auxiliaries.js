const activities = require("../../../data/gallery");

const auxiliariesFactory = () => {
  const getGalleryAlbum = () => activities.getGallery()

  const getGallery = async () => {
    const gallery = await getGalleryAlbum();

    let nuevoObjeto ={}

    gallery.forEach(x =>{
      if( !nuevoObjeto.hasOwnProperty(x.title)){
        nuevoObjeto[x.title] ={
          data:[]
        }
      }
    
      nuevoObjeto[x.title].data.push({
        id: x.idImage,
        url:x.url,
      })
    })



    console.log(gallery)
    
    return {
      success: 1,
      message: "Envio de correos Masivos",
      data: { nuevoObjeto },
    };

  }

 
  

  return {
    getGallery,
  };
};

module.exports = auxiliariesFactory;
