function getId() {
  const id = document.getElementById("getId").value;
  window.location.href = `/api/producto/${id}`;
}

async function updateProduct() {
  const id = document.getElementById("productId").value;
  const title = document.getElementById("productTitle").value;
  const price = document.getElementById("productPrice").value;
  const thumbnail = document.getElementById("productThumbnail").value;
  const obj = {
    id,
    title,
    price,
    thumbnail,
  };
  const upiProduct = await axios.put(`/api/producto/${obj.id}`, obj);
  return upiProduct;
}
async function deleteById() {
  const id = document.getElementById("deleted").value;
  const res = await axios.delete(`/api/productos/${id}`).catch((err) => {
    console.log(err);
  });
}

function imagenje(){
  let elDiv = document.getElementById('imagen');
  elDiv.innerHTML= `<img src="./telacreiste.jpg" width="500" height="450" >`;
}