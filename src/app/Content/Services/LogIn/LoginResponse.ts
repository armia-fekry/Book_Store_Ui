
export interface Adress{
  street:string
  city:string
  country:string

}
export interface LoginResponse{
  id:string,
  customerName:string ,
  adress:Adress

}

