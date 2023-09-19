# Credit/Debit Card Validator
### usign Front and backend

## Requirements

*In order to run this project, you need to have installed the following software on your computer:*
- Java (Backend)
- JDK (Backend)
- Docker (Database)
- npm (FrontEnd)

### To run this project follow this few steps:

1. Open folder **database** in a terminal as administrator
2. then run this docker command to create the postgres image using docker
```sh
docker compose up
``` 

3. Now using your IDE of preference you can run the backend project as long it has support for Spring Projects, you can run it easier with IntelliJ and just click the little triangle on the top (*Run button*).
(now you can also check the database with any database explorer)

4. Open the folder Front/card-validator-frontend with the terminal and use the following command, you can also use VSCode terminal
```sh
npm install
npm run dev
```

7. once the app is running go to `http://localhost:3000/` and try the app yourself!,

## Enjoy validating Credit/debit cards!😎