import { Component, OnInit } from '@angular/core';
import {ICardUser} from '@shared/components/cards/card-user/icard-user.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users: ICardUser[] = [
    {
      id: 1,
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg',
      name: 'Ivan Larios',
      age: 27,
      description: 'Desarrollador fullstack',
      work: 'Project manager'
    },
    {
      id: 2,
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg',
      name: 'Martín Larios',
      age: 27,
      description: 'Diseñador',
    },
    {
      id: 3,
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg',
      name: 'Luis Larios',
      age: 27,
      description: 'Desarrollador back',
    },
    {
      id: 4,
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg',
      name: 'Héctor Larios',
      age: 27,
      description: 'Desarrollador front',
    },
    {
      id: 5,
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg',
      name: 'Martín Larios',
      age: 27,
      description: 'Diseñador',
    },
    {
      id: 6,
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg',
      name: 'Luis Larios',
      age: 27,
      description: 'Desarrollador back',
    },
    {
      id: 7,
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg',
      name: 'Héctor Larios',
      age: 27,
      description: 'Desarrollador front',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
