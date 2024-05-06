import { productClient } from "./AxiosClient";

export default function useProductClient(){
    return{
        getAllProds : (page) => {
            return new Promise((resolve, reject )=>{
                productClient.get("/inventory" , { params : {page}})
                .then(data  => 
                    resolve ( {data : data?.data , status : data?.status , statusText : data?.statusText})
                )
                .catch(err => {
                    reject({err : err})
                })
            })

        },
        getProduct : (id) => {
            return new Promise((resolve, reject )=>{
                productClient.get(`/inventory/${id}`)
                .then(data => 
                    resolve ( {data : data?.data , status : data?.status , statusText : data?.statusText})
                )
                .catch(err => {
                    reject({err : err})
                })
            })

        },
        createProduct : (payload) => {
            return new Promise((resolve, reject )=>{
                productClient.post("/inventory", payload)
                .then(data => 
                    resolve ( {data : data?.data , status : data?.status , statusText : data?.statusText})
                )
                .catch(err => {
                    reject({err : err})
                })
            })
        },
    }
}