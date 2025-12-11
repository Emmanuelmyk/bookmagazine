import React, { useState, useEffect } from "react";
import "./Featured.css";

const Featured = () => {
  const [showForm, setShowForm] = useState(false);
  const [showZelleDetails, setShowZelleDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const book = {
    title: "The Restored Woman Magazine",
    price: 4,
    format: "PDF",
    image: "/assets/cover1.png",
  };

  const zelleDetails = {
    email: "cooperbyron657@gmail.com",
    phone: "470-659-1338",
    bank: "Bank of America",
  };

  // --- Disable page scroll when modal is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProceedToPayment = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please fill in all fields");
      return;
    }
    setShowZelleDetails(true);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    alert(`${label} copied to clipboard!`);
  };

  const handlePaymentComplete = () => {
    const whatsappNumber = "14706591338";

    const message = encodeURIComponent(
      `Hello! I've completed payment for "${book.title}" via Zelle.\n\n` +
        `My Details:\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Address: ${formData.address}\n\n` +
        `Amount Paid: $${book.price}\n` +
        `Book Format: ${book.format}\n\n` +
        `I'm sending proof of payment now.`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    setTimeout(() => {
      handleCloseModal();
    }, 500);
  };

  const handleCloseModal = () => {
    setShowForm(false);
    setShowZelleDetails(false);
    setFormData({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <section className="featured">
      <div className="container">
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
            {/* CANCEL always visible */}
            <button className="close-btn" onClick={handleCloseModal}>
              ×
            </button>

            {!showZelleDetails ? (
              <>
                <h3>Complete Your Purchase</h3>

                <div className="book-summary">
                  <img src={book.image} alt={book.title} />
                  <div className="book-summary-info">
                    <h4>{book.title}</h4>
                    <p>Format: {book.format}</p>
                    <p className="price">${book.price}</p>
                  </div>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    name="address"
                    placeholder="Delivery Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  ></textarea>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleProceedToPayment}
                  >
                    Proceed to Payment
                  </button>
                </form>
              </>
            ) : (
              <>
                <h3>Complete Payment via Zelle</h3>

                <div className="zelle-details">
                  <div className="zelle-info-box">
                    <div className="zelle-header">
                      <h4>Payment Details</h4>
                    </div>

                    <div className="zelle-item">
                      <label>Amount to Pay:</label>
                      <div className="zelle-value highlight-amount">
                        ${book.price}
                      </div>
                    </div>

                    <div className="zelle-item">
                      <label>Zelle Email:</label>
                      <div className="zelle-value">
                        {zelleDetails.email}
                        <button
                          className="copy-btn"
                          onClick={() =>
                            copyToClipboard(zelleDetails.email, "Email")
                          }
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div className="zelle-item">
                      <label>Zelle Phone:</label>
                      <div className="zelle-value">
                        {zelleDetails.phone}
                        <button
                          className="copy-btn"
                          onClick={() =>
                            copyToClipboard(zelleDetails.phone, "Phone number")
                          }
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div className="zelle-item">
                      <label>Bank:</label>
                      <div className="zelle-value">{zelleDetails.bank}</div>
                    </div>
                  </div>

                  <div className="payment-instructions">
                    <h4>Payment Instructions:</h4>
                    <ol>
                      <li>Open your Zelle app or banking app</li>
                      <li>Select "Send Money"</li>
                      <li>Enter email or phone</li>
                      <li>
                        Send <strong>${book.price}</strong>
                      </li>
                      <li>Click Done</li>
                      <li>Send proof via WhatsApp</li>
                    </ol>
                  </div>

                  <button
                    className="btn btn-primary btn-whatsapp"
                    onClick={handlePaymentComplete}
                  >
                    Done - Send Proof via WhatsApp
                  </button>

                  <button
                    className="btn btn-outline"
                    onClick={() => setShowZelleDetails(false)}
                  >
                    Back to Form
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Featured;
