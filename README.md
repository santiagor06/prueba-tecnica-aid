# Prueba tecnica

## API Reference

#### Crear Usuario

```http
  POST /users
```

| Body       | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| `name`     | `string` | **Required**. nombre del usuario   |
| `email`    | `string` | **Required**. email del usuario    |
| `password` | `string` | **Required**. password del usuario |

Al registrarse el correo debe ser unico y la contraseña debe contener una mayuscula,una letra y un numero

#### Loguear Usuario

```http
  POST /users/login
```

| Body       | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| `password` | `string` | **Required**. Password del estudiante |
| `email`    | `string` | **Required**. Correo del estudiante   |

En caso de usar un email que no este registrado, se lanzara un error, al comprobar que la contraseña y el usuario son correctos, se respondera con el id del usuario, el cual debera ser usado posteriormente para acceder a las rutas del usuario

#### Modificar Usuario

```http
  PUT /users
```

| Body      | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `string` | **Required**. id del usuario        |
| `address` | `string` | **Required**. direccion del usuario |
| `photo`   | `string` | **Required**. Url foto del usuario  |

#### Crear Libros o otros productos

```http
  POST /product
```

Para Libros:

| Body     | Type     | Description                    |
| :------- | :------- | :----------------------------- |
| `title`  | `string` | **Required**. titulo del libro |
| `author` | `string` | **Required**. autor del libro  |
| `price`  | `number` | **Required**. precio del libro |
| `isbn`   | `string` | **Required**. ISBN del libro   |

Para otros productos:

| Body    | Type     | Description                       |
| :------ | :------- | :-------------------------------- |
| `name`  | `string` | **Required**. nombre del producto |
| `price` | `number` | **Required**. precio del libro    |
| `code`  | `string` | **Required**. codigo del producto |

Dependiendo del body que se le pase a la ruta, se creara un libro o otro producto

#### Modificar Cantidad de producto

```http
  PUT /product
```

| Body        | Type     | Description                        |
| :---------- | :------- | :--------------------------------- |
| `productId` | `string` | **Required**. id del producto      |
| `amount`    | `number` | **Required**. cantidad de producto |

El "amount no debe ser menor a 0

#### Obtener Inventario

```http
  GET /product
```

Devuelve todos los productos existentes, con su respectiva cantidad y categoria del producto, por el momento solo se usa "book" o "other"

#### Crear Una Venta

```http
  POST /car
```

| Body        | Type     | Description                                        |
| :---------- | :------- | :------------------------------------------------- |
| `productId` | `string` | **Required**. id del producto                      |
| `userId`    | `string` | **Required**. id del usuario que realiza la compra |
| `amount`    | `number` | **Default(1)**. cantidad de producto               |

Cada vez que un usuario añada un producto al carrito, se creara una venta con estado "pending", hasta que el usuario termine su compra,en caso de que la cantidad del producto que quiera el usuario, exceda la cantidad del inventario, se enviara un error

#### Finalizar Compra

```http
  PUT /car
```

| Body     | Type     | Description                                        |
| :------- | :------- | :------------------------------------------------- |
| `userId` | `string` | **Required**. id del usuario que realiza la compra |

Al usar esta ruta se cambia el estado de todas las ventas dentro del carrto,de "pending" a "closed"

#### Obtener Lista Del Carrito

```http
  GET /car/:id
```

| params | Type     | Description                              |
| :----- | :------- | :--------------------------------------- |
| `id`   | `string` | **Required**. id del carrito del usuario |

Devuelve los productos del carrito que esten en estado "pending

## Run Locally

Clone the project

```bash
  git clone https://github.com/santiagor06/prueba-tecnica-aid.git
```

Go to the project directory

```bash
  cd prueba-tecnica-aid
```

Install dependencies

```bash
  npm install
```

Connect postgress

en un archivo .env, crear una variable DATABASE_URL, con las credenciales de tu base de datos postgres.
Luego para migrar la base de datos a tu postgres:

```bash
npx prisma migrate dev --name  init
```

Start the server

```bash
  npm run dev
```
