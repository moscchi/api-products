
function getId() {
  const id = document.getElementById("getId").value;
  window.location.href = `http://localhost:8080/api/producto/${id}`;
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
  const respusta = async (obj) => {
    console.log(obj);
    const res = await axios.put(`http://localhost:8080/api/producto/${obj.id}`, obj);
    console.log(res);
    return res;
  }
  const papi = await respusta(obj);
  console.log(papi);
  return papi;
}

/*  let content = data.length;
        console.log(content);
        fetch(`http://localhost:8080/api/producto/${obj.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(data), // data can be `string` or {object}!
                    
                    }).then(res => res.ok())
                    .catch(error => console.error('Error:', error))
                    .then(response => console.log('Success:', response));
                    } */
