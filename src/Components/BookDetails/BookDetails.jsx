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
        toast.success("You have Added to Read Books", {
          position: "top-center",
        });
        setVisitedR(false);
      } else {
        toast.warning("You have Already Added to Read Books");
      }
    }

    if (value === 'wishlist') {
      SavestoredDataForW(idInt);
      if (visitedW) {
        toast.success("You have Added to Wishlist Books", {
          position: "top-center",
        });
        setVisitedW(false);
      } else {
        toast.warning("You have Already Added to Wishlist Books");
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="hero min-h-screen bg-base-50 border rounded gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-10">
          <div className="bg-[#1313130D] border rounded shadow-lg p-4">
            <img
              src={book.image}
              className="rounded-lg w-[300px] h-[350px] lg:w-[325px] lg:h-[421px]"
              alt={book.bookName}
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold Playfair">
              {book.bookName}
            </h2>
            <p className="work_sens text-xl text-[#131313CC]">
              By: {book.authorName}
            </p>
            <div className="p-2 mb-6 mt-12">
              <p className="border-t border-dashed border-[#13131326]"></p>
              <p className="work_sens">{book.category}</p>
              <p className="border-t border-dashed border-[#13131326]"></p>
            </div>
            <p className="work_sens">
              <span className="text-2xl font-bold">Review:</span> {book.review}
            </p>
            <h2 className="work_sens flex gap-4 items-center mt-4">
              <p>
                <span className="text-2xl font-bold">Tag</span>
              </p>
              <p className="flex gap-4 work_sens text-[#23BE0A]">
                {book.tags.map((tag, index) => (
                  <span key={index} className="border rounded-3xl bg-purple-200">
                    #{tag}
                  </span>
                ))}
              </p>
            </h2>
            <div className="p-2 mb-6 mt-12">
              <p className="border-t border-dashed border-[#13131326]"></p>
            </div>
            <div className="font-semibold text-base p-2 work_sens">
              <p>
                <span className="text-[#131313B2]">Number of Pages</span>:
                <span className="ml-2">{book.totalPages}</span>
              </p>
              <p>
                <span className="text-[#131313B2]">Publisher:</span>
                <span className="ml-2">{book.publisher}</span>
              </p>
              <p>
                <span className="text-[#131313B2]">Year of Publishing</span>:
                {book.yearOfPublishing}
              </p>
              <p>
                <span className="text-[#131313B2]">Rating:</span> {book.rating}
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
                  className="btn bg-purple-300 ml-2"
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
