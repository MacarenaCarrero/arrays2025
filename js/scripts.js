// 1 Camila está organizando la lista de asistentes para una conferencia. Tiene un array con nombres, por ejemplo: ["Pedro", "Ana", "Sofía", "Luis"]. Quiere saber si "Ana" está en la lista y, si es así, debe imprimir "Invitada confirmada en la posición X". Si no está, debe imprimir "Invitada no encontrada".

const attendeeList = name => {
  const listOfPeople = ['Pedro', 'Ana', 'Sofía', 'Luis'];
  if (listOfPeople.includes(name)) {
    console.log(
      'Inivitada confirmada en la posición ' + listOfPeople.indexOf(name)
    );
  } else {
    console.log('Invitada no encontrada');
  }
};

attendeeList('Ana');

// 2 Bego está buscando un producto específico en su tienda. La lista de productos es: ["Camiseta", "Pantalón", "Gorra", "Zapatos"]. Necesita saber en qué posición se encuentra "Gorra". Si lo encuentra, debe mostrar su posición. Si no lo encuentra, debe mostrar "Producto no disponible".

const catalog = product => {
  const listOfProducts = ['Camiseta', 'Pantalón', 'Gorra', 'Zapatos'];
  if (listOfProducts.includes(product)) {
    console.log(
      'Se encuentra en la posición ' + listOfProducts.indexOf(product)
    );
  } else {
    console.log('Producto no disponible.');
  }
};
catalog('Gorra');
catalog('Falda');

// 3 Sabrina está revisando su lista de correos electrónicos para enviar promociones, por ejemplo: ["cliente1@gmail.com", "cliente2@hotmail.com", "cliente3@gmail.com"]. Quiere asegurarse de que al menos uno de los correos pertenece a Gmail. Si lo encuentra, debe mostrar "Correo de Gmail encontrado". Si no, "No hay correos de Gmail".

const listEmails = domain => {};

const emails = [
  'cliente1@gmail.com',
  'cliente2@hotmail.com',
  'cliente3@gmail.com'
];

if (
  emails[0].includes('gmail') ||
  emails[1].includes('gmail') ||
  emails[2].includes('gmail')
) {
  console.log('Correo de Gmail encontrado');
} else {
  console.log('No hay correo Gmail.');
}

// 4 Macarena necesita generar un identificador único para cada usuario. Recibe un array con nombre y apellido, (por ejemplo: ['Enrique Sofresco', 'Esther Colero', 'Leandro Gado']) y debe imprimir las dos primeras letras de cada nombre y de cada apellido en mayúsculas, seguidas de un número aleatorio entre 10 y 99.

const generateUserName = names => {
  const firstname = names[0].substring(0, names[0].indexOf(' '));
};

// const nameUser = () => {
//   const names = ['Enrique', 'Esther', 'Leandro'];
//   const surname = ['Sofresco', 'Colero', 'Gado'];

//   console.log(
//     names[0].substring(0, 2).toUpperCase() +
//       surname[0].substring(0, 2).toUpperCase() +
//       Math.floor(Math.random()) * (99 - 10) +
//       10
//   );
//   console.log(
//     names[1].substring(0, 2).toUpperCase() +
//       surname[1].substring(0, 2).toUpperCase() +
//       Math.floor(Math.random() * (99 - 10) + 10)
//   );
// };
// nameUser();

// 5 Abby encontró una caja fuerte con un código de acceso en un array de cuatro dígitos, por ejemplo: [1, 5, 3, 8]. Si la suma del primer y el último número es par, imprimirá "Acceso concedido", si no, "Acceso denegado".

const secretCode = code => {
  if ((code[0] + code[3]) % 2 === 0) {
    console.log('Acceso concedido.');
  } else {
    console.log('Acceso denegado.');
  }
};
secretCode([2, 3, 6, 8]);
secretCode([3, 6, 8, 2]);

// 6 Camila quiere generar dos números aleatorios entre 1 y 100 y determinar cuál es el mayor. Después los guardará en un array poniendo en la primera posición el mayor y en segunda posición el menor. Si son iguales, imprimirá "Empate", si no, imprimirá el array.
