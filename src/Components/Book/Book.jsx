import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Book = ({book}) => {
  const { bookName, authorName, image, rating, category, tags,id } = book;
  return (
    <Link to={`/book/${id}`}>
      <div className="p-5 max-h-[500px] flex-col border-2 rounded-xl space-y-2 mt-9">
      <img className="w-48 mx-auto p-4" src={image} alt="" />
      <div className="flex gap-3">
      <p className="text-xl text-green-600">{tags[0]}</p>
      <p className="text-xl text-green-600">{tags[1]}</p>
      </div>
      <h2 className="text-2xl font-bold">{bookName}</h2>
      <h2 className="text-xl">{authorName}</h2>
      <div className="flex justify-between text-xl">
      <h2 className="text-xl text-green-600">{category}</h2>
      <p className="flex gap-2">{rating}<span><FaRegStar className="text-orange-500"></FaRegStar></span></p>
      </div>
    </div>
    </Link>
  );
};

Book.propTypes={
  book: PropTypes.object
}

export default Book;