
# FinanSee API (NestJS)

FinanSee is just a simple API handcrafted to help people finances' management.
## 📄 Requirements

```bash
NodeJS >= 14
MongoDB >= 5.0
yarn(recommended) 
```


## ⚙️ Configuration

```bash
.env

MONGODB_URL='mongodb://localhost'
MONGODB_DATABASE='transactions'
APP_PORT=3005
```

## 🔨 Installation & Building

```bash
$ yarn install
$ yarn build
```


## 🟢 Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## 💡 Features

- [X] MongoDB Connection
- [X] Get All Transactions
- [x] Search/Filter Transactions
- [x] Create Transactions
- [x] Delete Transactions
- [ ] Authentication
- [ ] Interface Refactoring
- [ ] Logging
- [ ] Unit Tests
- [ ] More Refactoring

## 📗 Documentation (Swagger)

With a running instance of the project in development mode go to your browser
`http://localhost:3005/api/#/`

## 📜 Credits

This project uses extensively NestJS and TypeORM alongside a bunch of wonderful another depencies.
