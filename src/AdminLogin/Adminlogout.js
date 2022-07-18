// import React, { useEffect ,useContext } from 'react'
// import { useHistory } from 'react-router-dom';
// import { UserContext } from '../App';

// const Adminlogout = () => {
//     const  {state , dispatchs} = useContext(UserContext);

//     const history = useHistory();
//     //promises

//     useEffect(() => {
//         fetch('/admin-logout', {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json"
//             },
//             credentials: "include"
//         }).then((res) => {
//             dispatchs({type:"admin", payload:false })
//             history.push('/loginadmin', { replace: true });
//             if (!res.status === 200) {
//                 const error = new Error(res.error);
//                 throw error;

//             }

//         }).catch((err) => {
//             console.log(err);
//     });




//     });



//     return (
//         <>

//             <div>Logout</div>
//         </>
//     )
// }

// export default Adminlogout