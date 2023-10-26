// import json-server library
const jsonServer = require('json-server')

// create a server for running json data
const librarymanageServer = jsonServer.create()

// set up route/path for db.json file
const router = jsonServer.router('db.json')

// Return middlewares used by JSON server.
const middlewares = jsonServer.defaults()

// set up port number for running json server
const port = 4000 || process.env.PORT

// use middleware and router to your server
librarymanageServer.use(middlewares)
librarymanageServer.use(router)

// to listen server app to resolve request
librarymanageServer.listen(port,()=>{
    console.log(`Library management server started at port ${port} and waiting for request`);
})