# Live Logging Tool

This is a live logging tool, made to make the life of the developer more easy in certain cases.
We are using it to sniff low level communication happening over bluetooth between an app and a BLE device.

This repository is a small NodeJS back-end with Socket.io.


## Getting Started

### Install

```sh
$ npm install
```

### Run

```sh
$ npm start
```

The backend will be running on localhost:3000 by default.

#### Inspect logging

Browse to [localhost:3000](http://localhost:3000) to wait for new loggings to appear.

```sh
$ react-native-git-upgrade --npm
```

#### Trigger new logs

Do a POST request to [localhost:3000](http://localhost:3000/log) with a JSON body included.
The logging should appear immediately in the browser window that is waiting for new logs (cfr above).
