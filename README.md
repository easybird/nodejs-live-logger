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

#### Trigger new logs

Do a POST request to [localhost:3000](http://localhost:3000/log) with a JSON body with properties `error` and `message` included.
The logging should appear immediately in the browser window that is waiting for new logs (cfr above).

__Using fetch:__

```js
(async () => {
  await fetch('http://localhost:3000', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: "POST",
    body: JSON.stringify({ error: "Some error", message: "Some message" })
  })
})();
```

__Using curl:__

```console
$ curl -X POST http://localhost:3000 \
    -d "{ \"error\": \"Some error\", \"message\": \"Some message\" }" \
    -H "Content-Type: application/json" -H "Accept: application/json"
```
