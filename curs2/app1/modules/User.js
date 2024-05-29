class User {
    id;
    _nume;
    email;
    #varsta;
    constructor(id, nume, email, varsta) {
      //setam proprietatile
      this.id = id;
      this._nume = nume;
      this.email = email;
      this.#varsta = varsta;
    }
  
    set nume(numeNou) {
      this._nume = numeNou;
    }
    get nume() {
      return this._nume;
    }
  
    set varsta(varstaNoua) {
      console.log("varsta este ", varstaNoua);
      if (varstaNoua > 50 || varstaNoua < 16) {
        throw "Varsta incorecta";
      }
      this.#varsta = varstaNoua;
    }
  
    mananca(claorii) {
      console.log(`Mananca ${claorii} pe zi.`);
      this.#doarme(7);
    }
    #doarme(ore) {
      console.log(`Doarme ${ore} pe zi`);
    }
  }
  export { User };