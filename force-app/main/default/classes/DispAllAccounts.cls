public with sharing class DispAllAccounts {
    public DispAllAccounts() {

    }
    @AuraEnabled(cacheable=true)
    public static list<account> allaccounts(){

        return [select name,type from account];
        
    }
}
