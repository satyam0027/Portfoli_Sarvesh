"use client";

export default function Books() {
  const books = [
    {
      id: 1,
      title: "Love with Benefit",
      description:
        "Love with Benefit by Sarvesh Mishra is a heartfelt exploration of modern relationships, delving into the complexities of love, heartbreak, and emotional growth. The book beautifully portrays the journey of two individuals navigating the thin line between companionship and love, unraveling the nuances of trust and vulnerability. It questions societal norms and sheds light on the often-overlooked struggles of self-discovery within a relationship. With compelling storytelling and relatable characters, the author brings out the raw emotions that define human connections. This book isn't just about love but also about finding strength in adversity, learning to let go, and embracing the unexpected lessons life offers. Sarvesh Mishra’s writing captivates readers with its poignant narrative, making Love with Benefit a thought-provoking and inspiring read for anyone seeking to understand the true essence of relationships.",
      image: "/71tUFkBG9wL._SL1350_.jpg", // Replace with your actual image path
      amazonLink:
        "https://www.amazon.in/Love-Benefit-Sarvesh-Mishra/dp/938501319X/ref=sr_1_1?crid=3NWKC4W5AKDL6&dib=eyJ2IjoiMSJ9.-jOjWZ7MHLrLGe80ws039g.4wXLxTRR_uu-rLrDudwpXAfyWLuJUIiQNEy6RNSLDes&dib_tag=se&keywords=love+with+benefit+sarvesh+mishra&qid=1732049427&sprefix=love+with+benefit+sarvesh+mishra%2Caps%2C177&sr=8-1", // Replace with your Amazon link
    },
    

    // Add more books as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Published <span className="text-yellow-500">Books</span></h1>
      <p className="text-lg mb-8">
        Browse through the books I've published and you can also purchase them.
      </p>

      {books.map((book) => (
        <div
          key={book.id}
          className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 shadow-lg rounded-lg mb-8"
        >
          {/* Book Image */}
          <img
            src={book.image}
            alt={book.title}
            className="w-full md:w-1/3 object-cover rounded-md"
          />

          {/* Book Details */}
          <div className="flex-1">
            <h3 className="text-2xl text-black font-semibold mb-2">{book.title}</h3>
            <p className="text-gray-600 mb-4">{book.description}</p>
            <a
              href={book.amazonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Buy Now on Amazon
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
