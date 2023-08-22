import React, { useEffect } from "react"
import ImageSliderS from '../components/Swiper'

//  class SectionBuilder extends React.Component{
//    render(){
     
//     return(
        
//         <>
//            SectionBuilder
//            <SectionComponents/>
//         </>
//     )
//    }
// }

const TestPage = ({data}) =>{
    useEffect(()=>{
      caches.open("my-cache").then((cache) => {
         cache
           .add("http://192.168.0.183:8190/api/method/india_retailing.india_retailing.api.list_with_categories")
           .then(() => console.log("Data added to cache."))
           .catch((error) => console.error("Error adding data to cache:", error));
       });
   },[])
   const swiper_data = [
      { title: 'Item 1', description: 'Description 1' },
      { title: 'Item 2', description: 'Description 2' },
      { title: 'Item 3', description: 'Description 3' },
      // Add more items as needed
    ];
    const images = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg',
      'image5.jpg',
      // Add more image URLs as needed
    ];
  
   console.log('/////',data);
   return(
      <></>
//       <>
//          SectionBuilder
//          <div>
//         <h1>Custom Image Slider</h1>
//         <ImageSliderS  swipeable={false}
//   draggable={true}
//   showDots={true}
//   ssr={true} // means to render carousel on server-side.
//   infinite={true}
//   autoPlay={ true }
//   autoPlaySpeed={1000}
//   keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
//   containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//   dotListClass="custom-dot-list-style"
//   itemClass="carousel-item-padding-40-px" />
//       </div>         { data.data && data.data.lenth!=0 ?  data.data.map((t)=>{
//             return (<div className="border p-5 m-10" key={data.name}>{t.customer_name}</div>)
//          }) :<div>No Data</div>}
//       </>
  )
} 

export async function getServerSideProps({ req, res }) {
   // Call an external API endpoint to get posts
   // localStorage.token = "token 1a322d9a813cbdb:9b23be0a9513397"
   // const respo = await fetch(`https://erp14test.tridotstech.com/api/resource/Customer?fields=["customer_name"]&order_by=creation desc`)
   req.setheder(
      {authorization:"token 1a322d9a813cbdb:9b23be0a9513397"}
   )
   const resp = await fetch(`http://192.168.0.183:8190/api/method/india_retailing.india_retailing.api.list_with_categories`,{
      headers:req,
      cache:'force-cache'
   })
   const token = req
   console.log("inside fetch");
   console.log('>>>>>>>',token);
   // const data = await respo.json()
   return {
       props: { data:"req" }
  }
 }
// This gets called on every request
// export async function getStaticProps() {
//    // Fetch data from external API
//    const myHeaders = new Headers();
//    myHeaders.append('Content-Type', 'application/json');
// // myHeaders.append('Authorization', 'token 30838208d717710:7fdf3c518dc1552');
// const res = await fetch('http://192.168.1.31:8188/api/resource/Sales Order?limit_start=0&limit_page_length=10', {
//   method: 'GET',
//   headers: myHeaders,
// })
// const data = await res.json()
  
//    // Pass data to the page via props
//    return { props: { data } }
//  }
export default TestPage