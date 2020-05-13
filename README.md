## Theoretical part (in swedish)

När man besöker en hemsida i webbläsare så skickas i en "GET" i bakgrunden till den angivna URLn som svarar med en statuskod och skickar tillbaka sitt innehåll till användarens webläsare, ststuskoden som returneras märker normalt inte användaren av om det inte sker ett oväntat fel, servern ligger nere eller man har skickat en dålig förfrågan.
___

GET
Hämtar datan från pathen

POST
Skapar data på pathen

PUT
Ersätter hela innehållet på positionen i pathen, eller skapar en ny om ingen existerar på den positionen.

PATCH
Ersätter en eller flera delar av datan på positionen i pathen (om modellen tillåter), eller skapar en ny om ingen existerar på den positionen.

DELETE
Tar bort en position i den angivna pathen
___
    
http://: Är protokollet som används
localhost: Är domännamnet
3000: Är portnumret
users: Är pathen
?username=something: är förfrågnings-parametrar 
___

curl localhost:3000/users?name=arnt
curl localhost:3000/users;name=arnt
curl localhost:3000/users -H "name: arnt"
___

Mycket nytt men väldigt roligt. Kan vara lite svårt att greppa uppgifterna och hitta sin infallsvinkel.
___

## Practical part

### Backend: 
Should be able to handle students in a fictional learning management system "BongBong". 

### Frontend: 
simple React-app that fetch students and present them in a table.
Every table should contain a delete-button which erase the student.
A simple form to create new students with following data structure:

students: {
"_id": "<unikt uuid>
"email": "pelle.kanin@ecut.com"
"name": "Pelle kanin",
"address": {
   "gata": " Framtidsvägen 10A",
   "postnummer": "352 57",
   "ort": "Växjö"   
   }
}

And with these methods

/students GET lista alla studenter som en array
/students/?name=Pelle+kanin hämtar alla studenter med namn
/students POST skapa en ny student
/students/{id} GET visa en student
/students/{id} PUT skapa eller uppdatera en student (response code 201 om skapad, 200 om uppdaterad och 204 om inte ändrad)
/students/{id} DELETE ta bort en ny student (response code 200 om borta, 204 om inget togs bort)

___

## Backend 






## Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
