export interface IFans {
    firstname : string,
    lastname : string,
    birthdate? : Date,
    series? : [
        {
            name : string
        }
    ]
}
