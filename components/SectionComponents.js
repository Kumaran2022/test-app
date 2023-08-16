import { useEffect } from "react"
import style from '../styles/SectionComponents.module.css'

export const SectionComponents= ()=>{
    // useEffect(async ()=>{
    //     const res = await fetch("https://jsonplaceholder.typicode.com/users")
    //     const posts = await res.json()
    //     console.log(posts);
    // })
    return(
        <div className={style.test}>
            SectionComponents test
        </div>
    )
}

// const get_data = async () => {
// const res =  await fetch("https://jsonplaceholder.typicode.com/users")
// let data = await res.json();
// console.log(data);
// }

