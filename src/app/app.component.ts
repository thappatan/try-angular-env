import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'try-angular-env';

  apiUrl = import.meta.env.NG_APP_API_URL;
  apiKey = import.meta.env.NG_APP_API_KEY;
  myKey = import.meta.env.MY_SOME_KEY;

  ngOnInit(): void {
    console.log("API URL : ", this.apiUrl)
    console.log("API KEY : ", this.apiKey)
    console.log("MY KEY : ", this.myKey)
  }
}
