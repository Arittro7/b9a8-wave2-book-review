// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getStoredDataForW } from '../Utility/Localstorage';

// const Wishlist = ({ books }) => {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const storedWishlist = getStoredDataForW();
//     const wishlistBooks = books.filter(book => storedWishlist.includes(book.id));
//     setWishlist(wishlistBooks);
//   }, [books]);

//   return (
//     <div>
//       <h2 className="text-3xl font-bold work_sens border-black rounded-lg p-4 mt-4 mb-4 text-center bg-[#1313130D]">
//         Wishlist
//       </h2>
//       <div className="max-w-4xl mx-auto">
//         {wishlist.map(book => (
//           <div key={book.id} className="card card-side bg-base-100 rounded-lg shadow-xl grid lg:grid-cols-4 gap-2 p-4 mb-4">
//             <div className="col-span-1 bg-purple-100 w-70 h-70 border rounded shadow-xl m-4 Playfair">
//               <figure>
//                 <img src={book.image} alt="book" />
//               </figure>
//             </div>
//             <div className="col-span-3">
//               <div className="mb-6">
//                 <h2 className="text-2xl card-title font-bold Playfair">{book.bookName}</h2>
//                 <h2 className="text-base font-medium work_sens">By: {book.authorName}</h2>
//               </div>
//               <Link to={`/book/${book.id}`}>
//                 <button className="btn text-white bg-[#23BE0A] border rounded-full w-[170px] text-base font-medium work_sens">
//                   View details
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Wishlist;
