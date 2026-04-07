// import React, {useState, useEffect} from 'react'
// import axios from "axios"; 

// const Text = () => {
     
//     const [products, setProducts] = useState([]);

//     const fetchProducts = async() => {
//        try{
//          const {data} = await axios.get(
//             "https://jsonplaceholder.typicode.com/albums?_limit=4"
//          )
//          setProducts(data);
//        }catch(error){
//            console.log("Error fetching data:", error)
//        }
//     }

//     useEffect(() =>{
//         fetchProducts();
//     }, [])

//     return(
//    <div>
//       <h2>Product List</h2>
//       {
//         products.map(({id,title}) => {
//          return <div key={id} style={{border:"10px solid #ccc", margin:"10px", padding:"10px"}}>
//             <h4>{id}</h4>
//             <p>{title}</p>
//          </div>
//         })
//       }
//    </div>
//     );
// };

// export default Text;
