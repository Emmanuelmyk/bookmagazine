import React, { useState } from "react";
import "./Featured.css";

const Featured = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Book info
  const book = {
    title: "The Restored Woman Magazine",
    price: 2500, // NGN
    format: "PDF",
    image: "/src/assets/cover1.png",
  };

  // Handle form update
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Paystack redirect
  const handlePayment = async () => {
    const paystackUrl = `https://checkout.paystack.com/initialize`;

    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer sk_test_c8530467f1613fb52e565169d7d660751443b22f`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          amount: book.price * 100, // convert to kobo
          metadata: {
            name: formData.name,
            phone: formData.phone,
            address: formData.address,
            book_title: book.title,
            book_format: book.format,
          },
          callback_url: "YOUR_BACKEND_URL/send-book", // backend verifies and sends PDF
        }),
      }
    );

    const data = await response.json();

    if (data.status && data.data.authorization_url) {
      window.location.href = data.data.authorization_url;
    } else {
      alert("Payment initialization failed.");
    }
  };

  return (
    <section className="featured">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured This Month</h2>
        </div>

        <div className="featured-card">
          <div className="featured-image">
            <img src={book.image} alt={book.title} />
          </div>

          <div className="featured-content">
            <h3>{book.title}</h3>
            <p className="featured-description">
              <ul>
                <li>Real-life stories of restored women</li>
                <li>Faith-based devotionals & inspirational articles</li>
                <li>Leadership, entrepreneurship, creativity</li>
                <li>Lifestyle, wellness, family, and growth</li>
                <li>Spotlight on female trailblazers</li>
              </ul>
              The magazine is more than a publication—it is a movement.
            </p>

            <button
              className="btn btn-primary"
              onClick={() => setShowForm(true)}
            >
              Purchase Now
            </button>
          </div>
        </div>
      </div>

      {/* Purchase Modal */}
      {showForm && (
        <div className="purchase-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ×
            </button>

            <h3>Complete Your Purchase</h3>

            {/* Book Details */}
            <div className="book-summary">
              <img src={book.image} alt={book.title} />
              <div>
                <h4>{book.title}</h4>
                <p>Format: {book.format}</p>
                <p className="price">₦{book.price.toLocaleString()}</p>
              </div>
            </div>

            {/* Form Fields */}
            <form>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />

              <textarea
                name="address"
                placeholder="Delivery Address"
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handlePayment}
              >
                Proceed to Payment
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Featured;
