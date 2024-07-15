import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { SavestoredDataForR, SavestoredDataForW } from "../Utility/Localstorage";
import { useState } from "react";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);

  const [visitedR, setVisitedR] = useState(true);
  const [visitedW, setVisitedW] = useState(true);

  const handleReadbook = (value) => {
    if (value === 'read') {
      SavestoredDataForR(idInt);
      if (visitedR) {
        toast.success("Successfully Added to Read Books", {
          position: "top-center",
        });
        setVisitedR(false);
      } else {
        toast.warning("Already Added to Read Books");
      }
    }

    if (value === 'wishlist') {
      SavestoredDataForW(idInt);
      if (visitedW) {
        toast.success("Successfully Added to Wishlist", {
          position: "top-center",
        });
        setVisitedW(false);
      } else {
        toast.warning("Already Added to Wishlist");
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="hero min-h-screen bg-base-50 border rounded gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-10">
          <div className=" border rounded shadow-lg p-4">
            <img
              className="rounded-lg w-[300px] h-[350px] lg:w-[325px] lg:h-[421px]"
              src={book.image}
              alt=""
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold ">
              {book.bookName}
            </h2>
            <p className=" text-xl">
              By: {book.authorName}
            </p>
            <div className="p-2 mb-6 mt-12">
              <p className="border-t border-dashed"></p>
              <p className="border-t border-dashed"><span className="bg-green-400 py-1 px-2">{book.category}</span></p>
            </div>
            <p>
              <span className="text-2xl font-bold">Review:</span> {book.review}
            </p>
            <h2 className=" flex gap-4 items-center mt-4">
              <p>
                <span className="text-2xl font-bold">Tag</span>
              </p>
              <p className="flex gap-2 text-black">
                {book.tags.map((tag, index) => (
                  <span key={index} className="p-1 rounded-sm bg-orange-300">
                    {tag}
                  </span>
                ))}
              </p>
            </h2>
            <div className="p-2 mb-6 mt-12">
              <p className="border-t border-dashed "></p>
            </div>
            <div className="font-semibold text-base p-2">
              <p>
                <span>Number of Pages</span>:
                <span className="ml-2">{book.totalPages}</span>
              </p>
              <p>
                <span>Publisher:</span>
                <span className="ml-2">{book.publisher}</span>
              </p>
              <p>
                <span>Year of Publishing</span>:
                {book.yearOfPublishing}
              </p>
              <p>
                <span>Rating:</span> {book.rating}
              </p>
              <div className="mt-4">
                <button
                  onClick={() => handleReadbook('read')}
                  className="btn btn-outline btn-Success"
                >
                  Read
                </button>
                <button
                  onClick={() => handleReadbook('wishlist')}
                  className="btn bg-orange-300 ml-2"
                >
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
