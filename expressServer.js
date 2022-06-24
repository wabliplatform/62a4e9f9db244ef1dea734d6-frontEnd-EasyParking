const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','Rate.html')));
			this.app.get('/Rate', (req, res) => res.sendFile(path.join(__dirname,'html','Rate.html')));
			this.app.get('/Rate/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Rate.html')));
			this.app.get('/Payment', (req, res) => res.sendFile(path.join(__dirname,'html','Payment.html')));
			this.app.get('/Payment/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Payment.html')));
			this.app.get('/Search_1', (req, res) => res.sendFile(path.join(__dirname,'html','Search_1.html')));
			this.app.get('/Search_1/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Search_1.html')));
			this.app.get('/Search_2', (req, res) => res.sendFile(path.join(__dirname,'html','Search_2.html')));
			this.app.get('/Search_2/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Search_2.html')));
			this.app.get('/HomePage_M', (req, res) => res.sendFile(path.join(__dirname,'html','HomePage_M.html')));
			this.app.get('/HomePage_M/:id', (req, res) => res.sendFile(path.join(__dirname,'html','HomePage_M.html')));
			this.app.get('/WelcomePage', (req, res) => res.sendFile(path.join(__dirname,'html','WelcomePage.html')));
			this.app.get('/WelcomePage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','WelcomePage.html')));
			this.app.get('/LogIn', (req, res) => res.sendFile(path.join(__dirname,'html','LogIn.html')));
			this.app.get('/LogIn/:id', (req, res) => res.sendFile(path.join(__dirname,'html','LogIn.html')));
			this.app.get('/SignUp', (req, res) => res.sendFile(path.join(__dirname,'html','SignUp.html')));
			this.app.get('/SignUp/:id', (req, res) => res.sendFile(path.join(__dirname,'html','SignUp.html')));
			this.app.get('/MyRentals', (req, res) => res.sendFile(path.join(__dirname,'html','MyRentals.html')));
			this.app.get('/MyRentals/:id', (req, res) => res.sendFile(path.join(__dirname,'html','MyRentals.html')));
			this.app.get('/HomePage_H', (req, res) => res.sendFile(path.join(__dirname,'html','HomePage_H.html')));
			this.app.get('/HomePage_H/:id', (req, res) => res.sendFile(path.join(__dirname,'html','HomePage_H.html')));
			this.app.get('/parkinglot', (req, res) => res.sendFile(path.join(__dirname,'html','parkinglot.html')));
			this.app.get('/parkinglot/:id', (req, res) => res.sendFile(path.join(__dirname,'html','parkinglot.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;