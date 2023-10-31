const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { ApolloServer, gql} = require('apollo-server-express');

const cors = require('cors');

//const {graphqlExpress, graphiqlExpress} = require('graphql-server-express');
//const {makeExecutableSchema} = require('graphql-tools');

const {merge} = require('lodash');

const Usuario = require('./models/usuario');
const Perfil = require('./models/perfil');
const Admin = require('./models/administrador');
const Autor = require('./models/autor');
const Autorl = require('./models/autorl');
const Editorial = require('./models/editorial');
const Biblioteca = require('./models/biblioteca');
const Compra = require('./models/compra');
const Detallecompra = require('./models/detallecompra');

mongoose.connect('mongodb+srv://Toki:123@cluster0.sppm0yv.mongodb.net/', {useNewUrlParser:true, useUnifiedTopology:true});

const typeDefs =gql`
    type Usuario{
        id: ID!
        rut: String!
        nombre: String! 
        perfil: Perfil
    }
    
    type Perfil{
        id: ID!
        nombre: String!
    } 

    type Autor{
        id: ID!
        birth: String!
        nombre: String! 
        nacionalidad: String!
        autorl: Autorl
    }

    type Autorl{
        id: ID!
        nombre: String! 
    }

    type Editorial{
        id: ID!
        nombre: String!
        contacto: String!
        libros: String!
    }

    type Biblioteca {
        id: ID!
        nombre: String!
        direccion: String!
        telefono: String!
    }

    type Compra {
        id: ID!
        precioU: String!
        subtotal: String!
        iva: String!
        listado: String!
        direccion: String!
        rutempresa: String!
        fechap: String!
        fechal: String!
        detallecompra: Detallecompra
    }

    type Detallecompra {
        id: ID!
        producto: String!
    }

    type Alert{
        message: String!
    }

    input UsuarioInput{
        rut: String!
        nombre: String!
        perfil: String!
    }

    input PerfilInput{
        nombre: String!
    }

    input AutorInput{
        birth: String!
        nombre: String! 
        nacionalidad: String!
        autorl: String!
    }

    input AutorlInput{
        nombre: String!
    }

    input EditorialInput{
        nombre: String!
        contacto: String!
        libros: String!
    }

    input BibliotecaInput{
        nombre: String!
        direccion: String!
        telefono: String!
    }
   
    input CompraInput{
        precioU: String!
        subtotal: String!
        iva: String!
        listado: String!
        direccion: String!
        rutempresa: String!
        fechap: String!
        fechal: String!
        detallecompra: String!
    }

    input DetallecompraInput {
        producto: String!
    }

    type Query{
        getUsuarios : [Usuario]
        getUsuariosPerfil: [Usuario]
        getUsuario(id: ID!) : Usuario
        getUsuarioPerfil(id: ID!): Usuario

        getPerfiles: [Perfil]
        getPerfil(id: ID!): Perfil

        getAutores : [Autor]
        getAutoresAutorl: [Autor]
        getAutor(id: ID!) : Autor
        getAutorAutorl(id: ID!): Autor

        getAutoresl: [Autorl]
        getAutorl(id: ID!): Autorl

        getEditoriales: [Editorial]
        getEditorial(id: ID!): Editorial

        getBibliotecas: [Biblioteca]
        getBiblioteca(id: ID!): Biblioteca

        getCompras: [Compra]
        getComprasDetallecompra: [Compra]
        getCompra(id: ID!): Compra
        getCompraDetallecompra(id: ID!): Compra

        getDetallecompras: [Detallecompra]
        getDetallecompra(id: ID!): Detallecompra
    }

    type Mutation{
        addUsuario(input: UsuarioInput) : Usuario
        updUsuario(id: ID!, input: UsuarioInput): Usuario   
        delUsuario(id: ID!) : Alert

        addPerfil(input: PerfilInput): Perfil
        updPerfil(id: ID!, input: PerfilInput): Perfil
        delPerfil(id: ID!): Alert

        addAutor(input: AutorInput) : Autor
        updAutor(id: ID!, input: AutorInput): Autor   
        delAutor(id: ID!) : Alert
        
        addAutorl(input: AutorlInput) : Autorl
        updAutorl(id: ID!, input: AutorlInput): Autorl   
        delAutorl(id: ID!) : Alert
        
        addEditorial(input: EditorialInput) : Editorial
        updEditorial(id: ID!, input: EditorialInput): Editorial   
        delEditorial(id: ID!) : Alert

        addBiblioteca(input: BibliotecaInput) : Biblioteca
        updBiblioteca(id: ID!, input: BibliotecaInput): Biblioteca
        delBiblioteca(id: ID!): Alert

        addCompra(input: CompraInput): Compra
        updCompra(id: ID!, input: CompraInput): Compra
        delCompra(id: ID!): Alert

        addDetallecompra(input: DetallecompraInput): Detallecompra
        updDetallecompra(id: ID!, input: DetallecompraInput): Detallecompra
        delDetallecompra(id: ID!): Alert
    }
`;

const resolvers = {
    Query: {
        async getUsuarios(obj){
            const usuarios = await Usuario.find();
            return usuarios;
        },
        async getPerfiles(obj){
            const perfil = await Perfil.find();
            return perfil;
        },
        async getAutores(obj){
            const autor = await Autor.find();
            return autor;
        },
        async getAutoresl(obj){
            const autorl = await Autorl.find();
            return autorl;
        },
        async getEditoriales(obj){
            const editorial = await Editorial.find();
            return editorial;
        },
        async getBibliotecas(obj){
            const biblioteca = await Biblioteca.find();
            return biblioteca;
        },
        async getCompras(obj){
            const compra = await Compra.find();
            return compra;
        },
        async getDetallecompras(obj){
            const detallecompra = await Detallecompra.find();
            return detallecompra;
        },

        async getUsuario(obj, {id}){
            const usuario = await Usuario.findById(id);
            return usuario;
        },
        async getPerfil(obj, {id}){
            const perfil = await Perfil.findById(id);
            return perfil;
        },
        async getAutor(obj, {id}){
            const autor = await Autor.findById(id);
            return autor;
        },
        async getAutorl(obj, {id}){
            const autorl = await Autorl.findById(id);
            return autorl;
        },
        async getEditorial(obj, {id}){
            const editorial = await Editorial.findById(id);
            return editorial;
        },
        async getBiblioteca(obj, {id}){
            const biblioteca = await Biblioteca.findById(id);
            return biblioteca;
        },
        async getCompra(obj, {id}){
            const compra = await Compra.findById(id);
            return compra;
        },
        async getDetallecompra(obj, {id}){
            const detallecompra = await Detallecompra.findById(id);
            return detallecompra;
        },

        async getUsuariosPerfil(obj){
            const usuarios = await Usuario.find().populate('perfil');
            return usuarios;
        },
        async getAutoresAutorl(obj){
            const autores = await Autor.find().populate('autorl');
            return autores;
        },
        async getComprasDetallecompra(obj){
            const compras = await Compra.find().populate('detallecompra');
            return compras;
        },
        async getUsuarioPerfil(obj, {id}){
            const usuario = await Usuario.findById(id).populate('perfil');
            return usuario;
        },
        async getAutorAutorl(obj, {id}){
            const autor = await Autor.findById(id).populate('autorl');
            return autor;
        },
        async getCompraDetallecompra(obj, {id}){
            const compra = await Compra.findById(id).populate('detallecompra');
            return compra;
        }
    },
    Mutation: {
        async addUsuario(obj, {input}){
            let perfilBus = await Perfil.findById(input.perfil);
            if (perfilBus == null){
                return null;
            } else {
                const usuario = new Usuario({rut: input.rut, nombre: input.nombre, perfil: perfilBus._id});
                usuario.save();
                return usuario;
            }  
        },
        async updUsuario(obj, { id, input}){
            let perfilBus = await Perfil.findById(input.perfil);
            if (perfilBus == null){
                return null;
            } else {
                const usuario = await Usuario.findByIdAndUpdate(id, {rut: input.rut, nombre: input.nombre, perfil: perfilBus._id});
                return usuario;
            }
        },
        async delUsuario(obj, {id}){
            await Usuario.deleteOne({_id:id});
            return {
                message: `usuario ${id} fue asesinado`
            }
        },
        async addAutor(obj, {input}){
            let autorlBus = await Autorl.findById(input.autorl);
            if (autorlBus == null){
                return null;
            } else {
                const autor = new Autor({birth: input.birth, nombre: input.nombre, nacionalidad: input.nacionalidad, autorl: autorlBus._id});
                autor.save();
                return autor;
            }  
        },
        async updAutor(obj, { id, input}){
            let autorlBus = await Autorl.findById(input.autorl);
            if (autorlBus == null){
                return null;
            } else {
                const autor = await Autor.findByIdAndUpdate(id, {birth: input.birth, nombre: input.nombre, nacionalidad: input.nacionalidad, autorl: autorlBus._id});
                return autor;
            }
        },
        async delAutor(obj, {id}){
            await Autor.deleteOne({_id:id});
            return {
                message: `usuario ${id} fue asesinado`
            }
        },
        async addCompra(obj, {input}){
            let detallecompraBus = await Detallecompra.findById(input.detallecompra);
            if (detallecompraBus == null){
                return null;
            } else {
                const compra = new Compra({precioU: input.precioU, subtotal: input.subtotal, iva: input.iva, listado: input.listado, direccion: input.direccion, rutempresa: input.rutempresa, fechap: input.fechap, fechal: input.fechal, detallecompra: detallecompraBus._id});
                compra.save();
                return compra;
            }  
        },
        async updCompra(obj, { id, input}){
            let detallecompraBus = await Detallecompra.findById(input.detallecompra);
            if (detallecompraBus == null){
                return null;
            } else {
                const compra = await Compra.findByIdAndUpdate(id, {precioU: input.precioU, subtotal: input.subtotal, iva: input.iva, listado: input.listado, direccion: input.direccion, rutempresa: input.rutempresa, fechap: input.fechap, fechal: input.fechal, detallecompra: detallecompraBus._id});
                return compra;
            }
        },
        async delCompra(obj, {id}){
            await Compra.deleteOne({_id:id});
            return {
                message: `usuario ${id} fue asesinado`
            }
        },

       

        async addPerfil(obj, {input}){
            const perfil = new Perfil(input);
            perfil.save();
            return perfil;
        },
        async updPerfil(obj, { id, input}){
            const perfil = await Perfil.findByIdAndUpdate(id, input);
            return perfil;
        },
        async delPerfil(obj, {id}){
            await Perfil.deleteOne({_id:id});
            return {
                message: `perfil ${id} fue asesinado`
            }
        },

        async addAutorl(obj, {input}){
            const autorl = new Autorl(input);
            autorl.save();
            return autorl;
        },
        async updAutorl(obj, { id, input}){
            const autorl = await Autorl.findByIdAndUpdate(id, input);
            return autorl;
        },
        async delAutorl(obj, {id}){
            await Autorl.deleteOne({_id:id});
            return {
                message: `perfil ${id} fue asesinado`
            }
        },

        async addDetallecompra(obj, {input}){
            const detallecompra = new Detallecompra(input);
            detallecompra.save();
            return detallecompra;
        },
        async updDetallecompra(obj, { id, input}){
            const detallecompra = await Detallecompra.findByIdAndUpdate(id, input);
            return detallecompra;
        },
        async delDetallecompra(obj, {id}){
            await Detallecompra.deleteOne({_id:id});
            return {
                message: `perfil ${id} fue asesinado`
            }
        },


        async addEditorial(obj, {input}){
            const editorial = new Editorial(input);
            editorial.save();
            return editorial;
        },
        async updEditorial(obj, { id, input}){
            const editorial = await Editorial.findByIdAndUpdate(id, input);
            return editorial;
        },
        async delEditorial(obj, {id}){
            await Editorial.deleteOne({_id:id});
            return {
                message: `perfil ${id} fue asesinado`
            }
        },

        async addBiblioteca(obj, {input}){
            const biblioteca = new Biblioteca(input);
            biblioteca.save();
            return biblioteca;
        },
        async updBiblioteca(obj, { id, input}){
            const biblioteca = await Biblioteca.findByIdAndUpdate(id, input);
            return biblioteca;
        },
        async delBiblioteca(obj, {id}){
            await Biblioteca.deleteOne({_id:id});
            return {
                message: `perfil ${id} fue asesinado`
            }
        }
    }
}

let apolloServer = null;

const corsOptions = {
    origin: "http://localhost:8095",
    credentials: false
};

async function startServer() {
    const apolloServer = new ApolloServer({typeDefs, resolvers, corsOptions});
    await apolloServer.start();

    apolloServer.applyMiddleware({app, cors: false});
}

startServer();

const app = express();
app.use(cors());
app.listen(8095, function(){
    console.log('Arriba españa!!! (y el server tambien)')
})