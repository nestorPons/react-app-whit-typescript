import { Sub, SubsResponsFromApi } from "../types";

export const getAllSubs = ()=>{
    return fetchSubs().then(mapFromApiToSubs)
}
const fetchSubs = (): Promise<Array<SubsResponsFromApi>> => {
    return fetch('https://fakestoreapi.com/products').then(res=>res.json())
  }

const mapFromApiToSubs = (apiResponse: Array<SubsResponsFromApi>):Sub[] =>{
    return apiResponse.map((subFromApi: { title: string; image: string; price: number; description: string; }) =>{
        const {
        title: nick,
        image: avatar,
        price: subMonths,
        description
        } = subFromApi
        
        return {
        nick,
        avatar,
        subMonths,
        description
        }
    })
}
