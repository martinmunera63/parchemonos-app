
export const validateEmail = (email) => {
/* Expresion regular para valida un email
*/
 const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
 return email.match(mailformat)

}