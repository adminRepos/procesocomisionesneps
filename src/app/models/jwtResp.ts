export interface JwtRespI {
    dataUser:{
        id:string,
        name:string,
        email:string,
        accessToken:string,
        expiresIn: string
    }
}