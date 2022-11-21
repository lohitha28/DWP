import { LightningElement,wire } from 'lwc';
import allaccounts from '@salesforce/apex/DispAllAccounts.allaccounts';
export default class DispAccountsComponent extends LightningElement {

    @wire(allaccounts)
    accounts;
   
}