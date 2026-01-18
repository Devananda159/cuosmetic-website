import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customers',
  imports: [CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css'
})
export class Customers implements OnInit {
  users: any[] = [
    {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com',
      phone: '1-770-736-8031',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net'
      },
      address: {
        street: 'Kulas Light',
        city: 'Gwenborough',
        zipcode: '92998-3874'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'janesmith',
      email: 'jane@example.com',
      phone: '1-463-123-4447',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency'
      },
      address: {
        street: 'Victor Plains',
        city: 'Wisokyburgh',
        zipcode: '90566-7771'
      }
    },
    {
      id: 3,
      name: 'Mike Johnson',
      username: 'mikej',
      email: 'mike@example.com',
      phone: '1-770-736-8031',
      website: 'conrad.com',
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface'
      },
      address: {
        street: 'Douglas Extension',
        city: 'McKenziehaven',
        zipcode: '59590-4157'
      }
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      username: 'sarahw',
      email: 'sarah@example.com',
      phone: '1-477-935-8478',
      website: 'kale.biz',
      company: {
        name: 'Robel-Corkery',
        catchPhrase: 'Multi-tiered zero tolerance productivity'
      },
      address: {
        street: 'Hoeger Mall',
        city: 'South Elvis',
        zipcode: '53919-4257'
      }
    },
    {
      id: 5,
      name: 'David Brown',
      username: 'davidb',
      email: 'david@example.com',
      phone: '1-586-493-6943',
      website: 'demarco.info',
      company: {
        name: 'Keebler LLC',
        catchPhrase: 'User-centric fault-tolerant solution'
      },
      address: {
        street: 'Skiles Walks',
        city: 'Roscoeview',
        zipcode: '33263'
      }
    },
    {
      id: 6,
      name: 'Emily Davis',
      username: 'emilyd',
      email: 'emily@example.com',
      phone: '1-234-567-8901',
      website: 'emily.net',
      company: {
        name: 'Davis Corp',
        catchPhrase: 'Innovative solutions for tomorrow'
      },
      address: {
        street: 'Maple Street',
        city: 'Springfield',
        zipcode: '12345'
      }
    },
    {
      id: 7,
      name: 'Robert Miller',
      username: 'robm',
      email: 'robert@example.com',
      phone: '1-345-678-9012',
      website: 'miller.org',
      company: {
        name: 'Miller Industries',
        catchPhrase: 'Building the future today'
      },
      address: {
        street: 'Oak Avenue',
        city: 'Riverside',
        zipcode: '67890'
      }
    },
    {
      id: 8,
      name: 'Lisa Anderson',
      username: 'lisaa',
      email: 'lisa@example.com',
      phone: '1-456-789-0123',
      website: 'anderson.com',
      company: {
        name: 'Anderson Tech',
        catchPhrase: 'Technology that works'
      },
      address: {
        street: 'Pine Road',
        city: 'Lakewood',
        zipcode: '54321'
      }
    },
    {
      id: 9,
      name: 'Chris Taylor',
      username: 'christ',
      email: 'chris@example.com',
      phone: '1-567-890-1234',
      website: 'taylor.biz',
      company: {
        name: 'Taylor Solutions',
        catchPhrase: 'Smart solutions for smart people'
      },
      address: {
        street: 'Cedar Lane',
        city: 'Hillview',
        zipcode: '98765'
      }
    },
    {
      id: 10,
      name: 'Amanda White',
      username: 'amandaw',
      email: 'amanda@example.com',
      phone: '1-678-901-2345',
      website: 'white.info',
      company: {
        name: 'White Enterprises',
        catchPhrase: 'Excellence in every detail'
      },
      address: {
        street: 'Elm Street',
        city: 'Greenfield',
        zipcode: '13579'
      }
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => this.users = data,
        error: (error) => {
          console.log('Using fallback data');
          // Keep the fallback data if API fails
        }
      });
  }
}