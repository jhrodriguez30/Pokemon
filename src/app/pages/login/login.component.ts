import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { User } from 'src/app/models/user.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  value = '';
  value2 ='';

  constructor() { }

  ngOnInit(): void {
  }

}