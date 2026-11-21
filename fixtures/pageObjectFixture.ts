import{test as base} from '@playwright/test'
import { LoginPage } from '../pages/loginPages'
import { ProductsListPage } from '../pages/productListPage'
import { CartPage } from '../pages/cartPage'

type myFixture = 
{
    loginpage: LoginPage;
    productslistpage: ProductsListPage;
    cartpage: CartPage;
}

export const test = base.extend<myFixture>({

    loginpage: async({page},use)=>{
        await use(new LoginPage(page));

    },
    productslistpage: async({page},use)=>{
        await use(new ProductsListPage(page));

    },
    cartpage: async({page},use)=>{
        await use(new CartPage(page));

    }

})

export {expect} from '@playwright/test'