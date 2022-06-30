import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  items=["Mouse","Keyboard","Scanner","Speakers","Printer"];
  qty=[50,35,10,100,75];

  //Array of Object representing Student Data
  STUDENTS = [
    { "id": 1, "name": "Brigitte", "age": 17, "marks": 78 },
    { "id": 2, "name": "Jordy", "age": 18, "marks": 88 },
    { "id": 3, "name": "Terence ", "age": 16, "marks": 97 },
    { "id": 4, "name": "Brooklyn", "age": 18, "marks": 69 },
    { "id": 5, "name": "Amie", "age": 15, "marks": 92 },
  ];

  // Array of Objects representing Movie Class
  movie:Movie[]=[
    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},
    {title:'Captain American: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},
    {title:'Warcraft',director:'Duncan Jones',cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',releaseDate:'June 10, 2016'},
    ]
   
    title:string="Top 5 Movies of HollyWood";

  // Nested Array - Employee Array has nested Array -skills
  employees = [
    {
      name: "Rahul", email: "rahul@gmail.com",
      skills: [{ skill: 'Angular', exp: '2' },{ skill: 'Javascript', exp: '7' },{ skill: 'TypeScript', exp: '3' }
      ]
    },
    {
      name: "Sachin", email: "sachin@gmail.com",
      skills: [{ skill: 'Angular', exp: '1' },{ skill: 'Android', exp: '3' },{ skill: 'React', exp: '2' }
      ]
    },
    {
      name: "Laxman", email: "laxman@gmail.com",
      skills: [{ skill: 'HTML', exp: '2' },{ skill: 'CSS', exp: '2' },{ skill: 'Javascript', exp: '1' }
      ]
    }
  ];

  title1:string="ngIf Demo";
  showMe:boolean | any;
 
  num:number=0;
 
  serverID: number = 10;  
  serverStatus: string = 'Offline';  
 
  color:string='red';

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];
 
  city:string="Bangalore";

  getServerStatus() {  
    return this.serverStatus;  
    }  
 
    getColor() {  // === strict equality comparision operator, which returns false
                  // for the values which are not of a similar type
      return this.serverStatus === 'Online' ? 'green' : 'red';  
    }  
 
    getColor1(country:string):string { 
      switch (country) {
        case 'UK':
          return 'green';
        case 'USA':
          return 'blue';
        case 'HK':
          return 'red';
        default:
          return 'black';
      }
    }
    
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
   }

  ngOnInit(): void {
  }

}
