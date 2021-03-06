# caps

Begin the build of an application for a company called CAPS - The Code Academy Parcel Service.
CAPS will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, be notified that their customers received what they purchased.

### used Dependencies

```cmd
npm i -D code-fellows/supergoose
npm i -D types/jest
npm i -D eslint
npm i -D jest
npm i dotenv
npm i uuid
npm i faker
npm i socket.io
npm i socket.io-client
```

## Phase 1

To Start the application just type in your cmd

```cmd
npm start
```

Branch name : events

setup a system of events and handlers,with the intent being to change out the eventing system as we go, but keeping the handlers themselves largely the same.

### UML Phase 1

![Phase 1 UML](./assets/Phase1.jpg)

---

## Phase 2

To Start the application just type in your cmd, on each folder in this order

- caps --> vendor --> driver

```cmd
npm start
```

Branch name : tcp
Main folder : tcp

Separate all the previous files into folders to mock the effect of a server, main folder called tcp contains 3 sub-folders.

- cap --> is the server where the other folders connect to this file
- driver --> will sent if the package is picked-up or delivered
- Vendor --> When the package is delivered it will log a thank you message

### UML Phase 2

![Phase 2 UML](./assets/Phase2.jpg)

## Phase 3

Same orders as Phase 2 but we use socket.io and socket.io-client as npm packages to create the server and the clients, it have the same affect as events, and net libraries in JavaScript.

To Start the application just type in your cmd, on each folder in this order

- caps --> vendor --> driver

```cmd
npm start
```

Branch name : socket
Main folder : socket

Separate all the previous files into folders to mock the effect of a server, main folder called tcp contains 3 sub-folders.

- cap --> is the server where the other folders connect to this file
- driver --> will sent if the package is picked-up or delivered
- Vendor --> When the package is delivered it will log a thank you message

### UML Phase 3

![Phase 1 UML](./assets/Phase3.jpg)
