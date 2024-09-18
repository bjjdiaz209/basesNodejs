const { clear } = require('winston');
const {getAge , getUUID} = require('./plugins');

//const {emailTemplate} =  require('./js-foundations/01-template');

//const {getUserById} = require('./js-foundations/04-arrow');

//const getPokemonById = require('./js-foundations/06-promises')

  const {buildLogger} = require('./plugins');

const logger = buildLogger('app.js');
logger.log('mensaje de prueba');
logger.error('mensaje de error');

//getPokemonById(4)
//.then((pokemon)=> console.log({pokemon}))
//.catch((err) => console.log(err))
//.finally(() => console.log('finalmente'))


// ! referencia a la funcion factory y uso
//const {buildMakePerson} =  require ('./js-foundations/factory');

//const makePerson = buildMakePerson({getUUID,getAge});

//const obj = {name: 'jhon' , birthdate: '1985-10-21'};

//const jhon = makePerson(obj);

//console.log({jhon})





















//console.log(emailTemplate);

//console.log(emailTemplate);

//const id = 1;

//getUserById(id ,function(error , user){
  //  if (error) {
    //    throw new Error('user not found id ', id);
        
    //}
    //console.log({user});
//})
