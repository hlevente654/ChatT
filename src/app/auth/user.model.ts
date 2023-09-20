
export class User{
    constructor(public email: string, public id: string, private _token: string, private _tokenExpirationDate:Date){}

    /*
    * Ellenőrizzük hogy a token csak akkor legyen vissza adva ha a tokenExpirationDate még nem járt le.
    */
     get token (){
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate ){
            return null;
        }
        return this._token;
    }
    
}