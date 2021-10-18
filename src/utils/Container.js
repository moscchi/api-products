import fs from "fs";
class Container {
  constructor(ruta) {
    this.ruta = ruta;
  }

  async getById(id) {
    try {
      let objs = await fs.promises.readFile(this.ruta, "utf-8");
      let objsParsed = JSON.parse(objs);
      console.log(typeof id); //EL MUY #!$!$ LLEGABA COMO STRING.
      let byId = objsParsed.filter((obj) => obj.id === parseInt(id)); 
      console.log("object", byId);
      if(byId.length === 0)return { error: 'Producto no encontrado'};
      return byId;
    } catch (err) {
      console.log(err);
    }
  }
  async getAll() {
    try {
      const objs = await fs.promises.readFile(this.ruta, "utf-8");
      console.log(objs);
      return JSON.parse(objs);
    } catch (err) {
      return { error: 'Productos no encontrados'};
    }
  }
  async save(objes) {
    const objs = await this.getAll();
    let newId;
    if (objs.length === 0) {
      newId = 1;
    } else {
      newId = objs[objs.length - 1].id + 1;
    }
    const objeto = { ...objes, id: newId };
    objs.push(objeto);
    try {
      await fs.promises.writeFile(this.ruta, JSON.stringify(objs, null, 2));
      return objeto;
    } catch (err) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async deleteById(id) {
    try {
      let objs = await fs.promises.readFile(this.ruta, "utf-8");
      let objsParsed = JSON.parse(objs);
      let byId;
      for (let i = 0; i < objsParsed.length; i++) {
        if (id === 1) {
          objsParsed.splice(0, 1);
          byId = objsParsed;
          break;
        }
        if (objsParsed[i].id === id) {
          objsParsed.splice(i, id - 1);
          byId = objsParsed;
          break;
        }
        if (!byId) {
          byId = "El id no existe";
        }
      }
      console.log("object", byId);
      if (typeof byId === "string") {
        return byId;
      } else {
        await fs.promises.writeFile(this.ruta, JSON.stringify(byId), (err) =>
          console.log(err)
        );
        return byId;
      }
    } catch (err) {
      console.log(err);
    }
  }
  async update(obj) {
    const { id } = obj;
    console.log(obj);
    console.log("container", id);
    const eliminar = await this.deleteById(parseInt(id));
    const objs = await this.getAll();
    obj.id = parseInt(obj.id); //Aca hay que parsearlo poruqe sino te queda como string y te rompe el codigo del getById
    objs.push(obj);
    try {
      await fs.promises.writeFile(this.ruta, JSON.stringify(objs, null, 2));
      return objs;
    } catch (err) {
      throw new Error(`Error al guardar: ${err}`);
    }
  }
}

const contenedor = new Container("src/public/productos.txt");
console.log(contenedor.ruta);
export default contenedor;
