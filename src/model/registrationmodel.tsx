export default class registrationmodel
{
    private _name:string ="";
    private _code:string ="";
    private _id:number =0;
    
    get Name(){
        
            return this._name;
        }
        set Name(value : string)
        {
            this._name = value;
        }

        get Code(){
        
            return this._code;
        }
        set Code(value : string)
        {
            this._code = value;
        }

        get Id(){
        
            return this._id;
        }
        set Id(value : number)
        {
            this._id = value;
        }
}