import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage:any = LoginPage;

    mainMenu: Array<{title: string, component: any, icon: string}>;
    theme: string = 'default';

    constructor(private platform: Platform,
                private statusBar: StatusBar,
                private splashScreen: SplashScreen
    ){
        // Define mainMenu.
         this.mainMenu = [
            {title: 'Configuraciones', component: 'ConfigurationPage', icon: 'md-settings'},
            {title: 'Desconectar', component: 'LoginPage', icon: 'md-exit'}
         ];

        this.initializeApp();
    }

    initializeApp(){
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

    }
}

