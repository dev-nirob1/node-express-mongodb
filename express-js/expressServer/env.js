// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT); //manual

import {z, ZodError} from 'zod';
// const ageSchema = z.number().min(18).max(100).int();
// const userAge = 19;

// const parseUserAge = ageSchema.parse(userAge);
// const {data, error, success} = ageSchema.safeParse(userAge)
// console.log(success);

// try {
//     // zod is not only validating it also parsing data 
//     const parsedUserAge = ageSchema.parse(userAge);
//     console.log(parsedUserAge); //success case
// } catch (error) {
//     //instanceof is a javascript operator used to check if an object is an instance of a specific class or constructor
//     if(error instanceof ZodError){
//         console.log(error.issues[0].message) //display error message onlu
//     }else{
//         console.log('unexpected Error', error)
//     }
// }
const portSchema = z.coerce.number().min(1).max(55535).default(3000) //coerce will parse the port to number then check either it's a number or not
export const PORT = portSchema.parse(process.env.PORT)