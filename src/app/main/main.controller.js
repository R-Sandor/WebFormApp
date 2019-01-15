export class MainController {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
    console.log("Constructor");
  }

    postMessage()
    {
      this.$http.post('http://localhost:5000/api/message', {msg: this.message});
      console.log("Posted Message!!!?!");
    }
}







