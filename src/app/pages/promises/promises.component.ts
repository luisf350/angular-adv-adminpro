import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css',
})
export class PromisesComponent implements OnInit {
  ngOnInit(): void {
    this.getUsers().then((users) => {
      console.log(users);
    });
  }

  promiseExample(): void {
    const promise = new Promise((resolve, reject) => {
      if (true) {
        resolve('Hola Mundo!!');
      } else {
        reject('Algo salio mal');
      }
    })
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.error('Actual error', error);
      });

    promise.then((message) => {});
    console.log('Fin Init');
  }

  getUsers(): Promise<unknown> {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data))
        .catch((error) => {
          console.error(error);
        });
    });
  }
}
