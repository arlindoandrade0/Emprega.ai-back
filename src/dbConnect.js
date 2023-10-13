async function conectaNaDatabase() {
     mongoose.connect("mongodb+srv://arlindoguerra:55gQUom84aGYqh1x@cluster0.4xtdldk.mongodb.net/empregaai?retryWrites=true&w=majority");
    
    return mongoose.connection;
 }
    
     export default conectaNaDatabase;