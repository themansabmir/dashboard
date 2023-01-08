
export interface IPerson{
    name: string,
    email: string,
    img:string
}


export interface IRowData{
    id?:number
    user: IPerson,
    status: boolean,
    role: string,
    loginDate: string,
    deleteRecord?: (event: React.MouseEvent<HTMLButtonElement>) => void


}