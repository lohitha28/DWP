import { LightningElement,wire } from 'lwc';
import allaccounts from '@salesforce/apex/DispAllAccounts.allaccounts';
export default class WelcomeComponent extends LightningElement {

    welcomename;
    showmessage(event)
    {
this.welcomename=event.target.value;
    }

    @wire(allaccounts)
    accounts;
}