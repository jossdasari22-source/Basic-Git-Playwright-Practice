import{Page, Locator} from '@playwright/test'
import { Test_Data } from '../data/testData';

export class LoginPage{
    page: Page;
    username: Locator;
    password: Locator;
    loginBtn: Locator;

 
constructor(page: Page){

    this.page = page;
    this.username = page.locator('#user-name')
    this.password = page.locator('#password')
    this.loginBtn = page.locator('#login-button')
}
async openApp(){
    await this.page.goto('/');
}
async doLogin(){
   await this.username.fill(Test_Data.user.username);
    await this.password.fill(Test_Data.user.password);
    await this.loginBtn.click();
}

}

