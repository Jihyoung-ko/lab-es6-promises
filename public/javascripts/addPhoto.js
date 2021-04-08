
function addPhoto(img, id, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.querySelector(id).innerHTML += `<img src="${img}">`;
      resolve(img);
      callback ? callback() : ''; // For iteration one
    }, Math.floor(Math.random() * 1000));
  });
}