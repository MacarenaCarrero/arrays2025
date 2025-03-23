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

const listEmails = () => {};

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

listEmails();

// 4 Macarena necesita generar un identificador único para cada usuario. Recibe un array con nombre y apellido, (por ejemplo: ['Enrique Sofresco', 'Esther Colero', 'Leandro Gado']) y debe imprimir las dos primeras letras de cada nombre y de cada apellido en mayúsculas, seguidas de un número aleatorio entre 10 y 99.

const nameUser = fullName => {
  const letters =
    fullName.substring(0, fullName.indexOf(' ')).charAt(0).toUpperCase() +
    fullName.substring(0, fullName.indexOf(' ')).charAt(1).toUpperCase();
  fullName
    .substring(0, fullName.indexOf(' ') + 1)
    .charAt(0)
    .toUpperCase() +
    fullName
      .substring(0, fullName.indexOf(' ') + 2)
      .charAt(0)
      .toUpperCase();
  return letters;
};
const generateUserName = names => {
  const firstValue =
    nameUser(names[0]) + Math.floor(Math.random() * (99 - 10) + 10);
  const secondValue =
    nameUser(names[1]) + Math.floor(Math.random() * (99 - 10) + 10);
  const thirdValue =
    nameUser(names[2]) + Math.floor(Math.random() * (99 - 10) + 10);

  console.log(firstValue, secondValue, thirdValue);
};

generateUserName(['Enrique Sofresco', 'Esther Colero', 'Leandro Gado']);

// 5 Abby encontró una caja fuerte con un código de acceso en un array de cuatro dígitos, por ejemplo: [1, 5, 3, 8]. Si la suma del primer y el último número es par, imprimirá "Acceso concedido", si no, "Acceso denegado".

const secretCode = code => {
  if ((code[0] + code[code.length - 1]) % 2 === 0) {
    console.log('Acceso concedido.');
  } else {
    console.log('Acceso denegado.');
  }
};
secretCode([2, 3, 6, 8]);
secretCode([3, 6, 8, 2]);

// 6 Camila quiere generar dos números aleatorios entre 1 y 100 y determinar cuál es el mayor. Después los guardará en un array poniendo en la primera posición el mayor y en segunda posición el menor. Si son iguales, imprimirá "Empate", si no, imprimirá el array.

const generateAleatoryNumber = number => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);

  if (firstNumber > secondNumber) {
    number[0] = firstNumber;
    number[1] = secondNumber;
  } else {
    {
      number[0] = secondNumber;
      number[1] = firstNumber;
    }

    if (secondNumber === firstNumber) {
      console.log('Empate');
    } else {
      console.log(number);
    }
  }
};
generateAleatoryNumber([]);

// 7 Bego está calculando descuentos para varios clientes. Recibe un array con tres precios originales ([120, 75, 40]). Para cada precio, genera un número aleatorio entre 1 y 100. Si el número es menor que 50, aplica un 10% de descuento. Si es mayor o igual a 50, aplica un 20%. Debe imprimir el precio original, el número generado y el precio final con descuento para cada uno.

const generateDiscount = prices => {
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  const thirdNumber = Math.floor(Math.random() * 100);

  if (firstNumber > 50) {
    console.log(
      `${prices[0]} | Numero generado :${firstNumber} | Precio final : ${
        prices[0] - prices[0] * 0.1
      }`
    );
  } else {
    console.log(
      `${prices[0]} | Numero generado :${firstNumber} | Precio final : ${
        prices[0] - prices[0] * 0.2
      }`
    );
  }

  if (secondNumber > 50) {
    console.log(
      `${prices[1]} | Numero generado :${secondNumber} | Precio final : ${
        prices[1] - prices[1] * 0.1
      }`
    );
  } else {
    console.log(
      `${prices[1]} | Numero generado :${secondNumber} | Precio final : ${
        prices[1] - prices[1] * 0.2
      }`
    );
  }
  if (thirdNumber > 50) {
    console.log(
      `${prices[2]} | Numero generado :${thirdNumber} | Precio final : ${
        prices[2] - prices[2] * 0.1
      }`
    );
  } else {
    console.log(
      `${prices[2]} | Numero generado :${thirdNumber} | Precio final : ${
        prices[2] - prices[2] * 0.2
      }`
    );
  }
};

generateDiscount([120, 75, 40]);

// 8 Sabrina está en un restaurante con dos amigos. Recibe un array con tres cuentas, por ejemplo: [120, 75, 93]. Cada cuenta debe dividirse entre 3 para pagar de manera justa. Si el resultado de la división es impar, debe redondearse al número par más cercano. Sabrina debe imprimir el precio original, el precio dividido y el precio final (redondeado si es necesario) para cada cuenta.

const splitBill = accounts => {
  const result1 = accounts[0] / 3;
  const result2 = accounts[1] / 3;
  const result3 = accounts[2] / 3;

  //primera cuenta
  if (result1 % 2 !== 0) {
    console.log(Math.round(result1) + 1);
  } else {
    console.log(result1);
  }

  //segunda cuenta
  if (result2 % 2 !== 0) {
    console.log(Math.round(result2) + 1);
  } else {
    console.log(result2);
  }

  //tercera cuenta
  if (result3 % 2 !== 0) {
    console.log(Math.round(result3) + 1);
  } else {
    console.log(result3);
  }
};

splitBill([120, 75, 93]);

// 9 Macarena quiere calcular la edad de tres clientes. Recibe un array con tres años de nacimiento entre 1950 y 2010. Sabiendo que estamos en el año 2025, debe calcular la edad de cada uno y determinar si al menos uno es mayor de 18. Si hay al menos un cliente mayor de edad, imprimirá "Hay un cliente mayor de edad", si no, "Todos son menores de edad".

const knowAge = ages => {
  const actualYear = 2025;

  if (
    actualYear - ages[0] >= 18 ||
    actualYear - ages[1] >= 18 ||
    actualYear - ages[2] >= 18
  ) {
    console.log('Hay un cliente mayor de edad.');
  } else {
    console.log('No hay mayores de edad.');
  }
};

knowAge([2009, 2010, 2008]);
knowAge([1992, 2001, 2008]);

// 10 Abby encontró un código de seguridad con tres números entre 100 y 999. Si el primer número es mayor que el segundo pero menor que el tercero, imprimirá "Código válido", si no, "Código incorrecto".

const validCodeOrNo = numbers => {
  if (numbers[0] > numbers[1] && numbers[0] < numbers[2]) {
    console.log('Código válido.');
  } else {
    console.log('Código incorrecto.');
  }
};
validCodeOrNo([102, 301, 984]);
validCodeOrNo([500, 100, 800]);

// 11  Camila está organizando la lista de clientes de su tienda. Un cliente nuevo, "Lucía", llega y debe agregarse al final de la lista de clientes: ["Carlos", "María", "Sofía"]. Luego, debe mostrar cuántos clientes hay en la lista.

const addClients = client => {
  const clients = ['Carlos', 'María', 'Sofía'];
  clients.push(client);
  console.log(clients);
};
addClients('Lucia');

// 12 Bego está revisando el stock de su tienda. Un producto aleatorio ya no está disponible y debe ser eliminado de la lista: ["Pan", "Leche", "Huevos"]. Después, debe mostrar cuántos productos quedan.

const stockShop = product => {
  const products = ['Pan', 'Leche', 'Huevos'];

  let removeProduct = Math.floor(Math.random(products.length));
};

// 13 Sabrina está registrando pedidos en un restaurante. Un nuevo pedido, "Pizza", ha sido añadido en primer lugar a la lista de pedidos: ["Hamburguesa", "Ensalada"]. Luego, debe imprimir el primer pedido en la lista.

const foodOrders = product => {
  const allOrders = ['Hamburguesa', 'Ensalada'];

  allOrders.unshift(product);
  console.log(allOrders);
};
foodOrders('Pizza');

// 14 Macarena está revisando las reservas de su hotel. Un cliente canceló su reserva en la lista: ["Habitación 101", "Habitación 203", "Habitación 305"]. Luego, debe mostrar cuántas reservas quedan.

const hotelReservations = cancellation => {
  const reservations = ['Habitación 101', 'Habitación 203', 'Habitación 305'];

  reservations.shift(cancellation);
  console.log(reservations);
};
hotelReservations();

// 15 Abby encontró una lista de suministros en un refugio, por ejemplo: ["Botiquín", "Munición", "Agua", "Comida"]. Necesita asegurarse de que hay "Munición" y "Comida" disponibles. Si ambos están en la lista, debe mostrar "Suministros completos". Si falta alguno, debe mostrar "Suministros incompletos".

const checkSuppliesList = supply => {
  const suppliesList = ['Botiquín', 'Munición', 'Agua', 'Comida'];

  if (suppliesList.includes('Comida') && suppliesList.includes('Munición')) {
    console.log('Suministros completos');
  } else {
    console.log('Suministros incompletos');
  }
};
checkSuppliesList('Comida', 'Munición');

// 16  Camila está organizando una lista de espera. Un cliente importante, "Fernando", debe ser colocado en la primera posición de la lista: ["Ana", "Luis", "Elena"]. Luego, debe mostrar quién es el último en la lista.

const waitingList = clientVip => {
  const clients = ['Ana ', 'Luis ', 'Elena'];

  const removeClient = clients.unshift(clientVip);
  let finalListClient = clients[clients.length - 1];
  console.log(`${clients}. Y el ultimo de la lista es: ${finalListClient}.`);
};
waitingList('Fernando ');

// 17 Bego tiene una caja registradora con pagos pendientes. Ha procesado el primer pago en la lista de pagos y debe eliminarlo: [15.50, 32.75, 8.99]. Luego, debe mostrar cuántos pagos quedan por procesar.

const makeCash = pay => {
  const payList = [15.5, 32.75, 8.99];

  payList.shift();
  console.log(`Quedan ${payList} .`);
};
makeCash();

// 18 Sabrina está actualizando el menú de su restaurante. Un nuevo plato, "Pasta", ha sido agregado a la lista de platos: ["Sopa", "Carne asada"], y el último ha sido eliminado. Luego, debe mostrar la lista de platos.

const restaurantMenu = dish => {
  const menu = ['Sopa', 'Carne asada'];

  menu.unshift(dish);
  menu.pop(dish);
  console.log(menu);
};
restaurantMenu('Pasta');

// 19 Macarena está organizando un torneo. Un nuevo jugador, "Diego", se ha inscrito y reemplazará al último de la lista de jugadores: ["Hugo", "Mateo", "Álvaro"]. Luego, debe mostrar la cantidad total de jugadores inscritos.

const playersChampions = player => {
  const players = ['Hugo', 'Mateo', 'Álvaro'];

  players.pop(player);
  players.push(player);
  console.log(players);
};
playersChampions('Diego');

// 20 Abby está recibiendo señales de radio con mensajes en espera. Ha procesado el mensaje más antiguo de la lista: ["Atención, infectados cerca", "Necesitamos refuerzos", "Zona despejada"] y ha recibido uno nuevo: "Solicitamos medicinas". Luego, debe mostrar los mensajes uno por uno en console.log independientes.

// const messageRadio = message => {
//   const messages = [
//     'Atención, infectados cerca',
//     'Necesitamos refuerzos',
//     'Zona despejada'
//   ];
//   messages.pop(message);
//   message.push(message);
//   console.log(messages);
// };
// messageRadio('Solicitamos medicinas');
