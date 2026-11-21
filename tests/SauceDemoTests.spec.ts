/*import{test, expect} from '@playwright/test'
import {LoginPage} from '../pages/loginPages'
import {ProductsListPage} from '../pages/productListPage'
import{CartPage} from'../pages/cartPage'
*/

import {test,expect} from '../fixtures/pageObjectFixture'
import { Test_Data } from '../data/testData';

test('validateLogin', async({page,loginpage})=>{

    //const loginpage = new LoginPage(page);
    await loginpage.openApp();
    await loginpage.doLogin();
    expect(await page).toHaveURL(Test_Data.urls.inventory);
    await page.waitForTimeout(3000);

}) 

test ('validatingAddToCart', async({page, loginpage,cartpage,productslistpage})=>{

   // const loginpage = new LoginPage(page);
    await loginpage.openApp();
    await loginpage.doLogin();
    expect(await page).toHaveURL(Test_Data.urls.inventory);
    await page.waitForTimeout(3000);

    //const productslistpage = new ProductsListPage(page);
    await productslistpage.clickAddtoCart();
    await productslistpage.ClickCartBadge();
    expect(await page).toHaveURL(Test_Data.urls.cart);

    //const cartpage = new CartPage(page);
    expect(await cartpage.cartProduct).toHaveText('Sauce Labs Backpack');
    await page.waitForTimeout(3000);

})