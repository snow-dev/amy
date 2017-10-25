import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    @ViewChild('userName') userNameInput;

    loginForm: FormGroup;
    username: string = '';
    password: string = '';


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public formBuilder: FormBuilder
    ){
        this.loginForm = formBuilder.group({
           username: ['', Validators.compose([Validators.maxLength(40), Validators.required ])],
           password: ['', Validators.compose([Validators.required, Validators.maxLength(30) ])]
        });

        /* END_CONSTRUCTOR */
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    login(){
        console.log("LoginPage:: Getting user information.");

        // Set HomePage as new RootPage.
        this.setNewRoot(HomePage);

    }

    setNewRoot(page){
        this.navCtrl.setRoot(page);

    }

}
