// import axios from 'axios';
// // import img1 from '../images/sec01-img-01';
// // import img2 from '../images/sec01-img-2.png';
// // import img3 from '../images/sec01-img-3.png';
// import './css/App.css';
// import './css/common.css';
// import { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState(null);
//   getImages = () => {
//     axios
//       .get('https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTMz')
//       .then((response) => {
//         setData(response.data)
//       });
//   }
//   return (
//     <div className="main">
//       <div className="container">
//         <section className="sec01">
//           <h1 className="h1">Snap   photos and share like<br/>never before</h1>
//           <div className="profile-list">
//             <div className="item">
//               <img src={img1} className="profile-img" alt="프로필 이미지 1" />
//               <div className="profile-conts">
//                 <h2 class="h2">Sed ut perspiciatis</h2>
//                 <div className="conts">
//                   Nemo enim ipsam voluptatem quia voluptas sit<br/>
//                   aspernatur aut odit aut fugit, sed quia consequuntur<br/>
//                   magni dolores eos qui ratione voluptatem.
//                 </div>
//                 <a href="#" className="link-btn">LEARN MORE</a>
//               </div>
//             </div>
//             <div className="item">
//               <img src={img2} className="profile-img" alt="프로필 이미지 2" />
//               <div className="profile-conts">
//                 <h2 class="h2">Lorem ipsum dolor</h2>
//                 <div className="conts">
//                   Amet, consectetur adipiscing elit, sed do eiusmod<br/>
//                   tempor incididunt ut labore et dolore magna aliqua.<br/> 
//                   Ut enim ad minim veniam, quis.
//                 </div>
//                 <a href="#" className="link-btn">LEARN MORE</a>
//               </div>
//             </div>
//             <div className="item">
//               <img src={img3} className="profile-img" alt="프로필 이미지 3" />
//               <div className="profile-conts">
//                 <h2 class="h2">Nemo enim ipsam</h2>
//                 <div className="conts">
//                   Consequuntur magni dolores eos qui ratione<br/>voluptatem sequi nesciunt. Neque porro quisquam est,<br/>
//                   qui dolorem ipsum quia dolor.
//                 </div>
//                 <a href="#" className="link-btn">LEARN MORE</a>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="sec02">
//           <h2 className="h2">Sed ut perspiciatis unde omnis</h2>
//           <div className="conts">
//             There are many variations of passages of Lorem Ipsum available, 
//             but the majority have suffered alteration in some form, by injected humour, 
//             or randomised words which don't look even slightly believable. 
//             If you are going to use a passage of Lorem Ipsum, 
//             you need to be sure there isn't anything embarrassing hidden in the middle of text. 
//             All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
//           </div>
//           <p className='sub'>
//             There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
//             by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, 
//             you need to be sure there isn't anything embarrassing hidden in the middle of text. 
//             All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
//           </p>
//           <div className="newsletter-wrap">
//             <img src={imgUrl} alt="" />
//             <h3 className="h3">Subscribe to our newsletter</h3>
//             <form action="">
//               <div className="email-input-wrap">
//                 <input type="text" className="email-input" placeholder="Enter your email"/>
//                 <button className="send-btn"></button>
//               </div>
//             </form>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default App;
