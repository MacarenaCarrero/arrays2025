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

listEmails([
  'cliente1@gmail.com',
  'cliente2@hotmail.com',
  'cliente3@gmail.com'
]);
