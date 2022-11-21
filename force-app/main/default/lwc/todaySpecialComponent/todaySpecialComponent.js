import { LightningElement } from 'lwc';
import { api } from 'lwc';
import pasta from '@salesforce/resourceUrl/Pasta'
import pizza from '@salesforce/resourceUrl/Pizza'
import biryani from '@salesforce/resourceUrl/Biryani'
import mojito from '@salesforce/resourceUrl/Mojito'
export default class TodaySpecialComponent extends LightningElement {

    @api content;

    handleOkay() {
        this.close('okay');
    }
    pastaurl = pasta;
    pizzaurl=pizza;
    biryaniurl=biryani;
    mojitourl=mojito;
}