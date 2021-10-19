import fs from "fs";
class Container {
  constructor(ruta) {
    this.ruta = ruta;
  }

  async getById(id) {
    try {
      let objs = await fs.promises.readFile(this.ruta, "utf-8");
      let objsParsed = JSON.parse(objs);
      let byId = objsParsed.filter((obj) => obj.id === parseInt(id)); 
      if(!byId.length) return { error: 'Producto no encontrado'};
      return byId;
    } catch (err) {
      console.log(err);
    }
  }
  async getAll() {
    try {
      const objs = await fs.promises.readFile(this.ruta, "utf-8");
      return JSON.parse(objs);
    } catch (err) {
      return { error: 'Productos no encontrados'};
    }
  }
  async save(objes) {
    const objs = await this.getAll();
    let newId;
    if (!objs.length) {
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
    await this.deleteById(parseInt(id));
    const objs = await this.getAll();
    obj.id = parseInt(obj.id); //Aca hay que parsearlo poruqe sino te queda como string y te rompe el codigo del getById
    objs.push(obj);
    console.log(objs);
    const newArray = objs.sort((a, b)=> {return a.id - b.id}); 
    console.log(objs);
    try {
      await fs.promises.writeFile(this.ruta, JSON.stringify(objs, null, 2));
      return objs;
    } catch (err) {
      throw new Error(`Error al guardar: ${err}`);
    }
  }
} 

const contenedor = new Container("src/database/productos.txt");
export default contenedor;
