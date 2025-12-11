import React, { useState } from "react";
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

  // Book info
  const book = {
    title: "The Restored Woman Magazine",
    price: 4, // USD
    format: "PDF",
    image: "/assets/cover1.png",
  };

  // Zelle payment details
  const zelleDetails = {
    email: "cooperbyron657@gmail.com",
    phone: "470-659-1338",
    bank: "Bank of America",
  };

  // Handle form update
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Show Zelle payment details
  const handleProceedToPayment = () => {
    // Basic validation
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

  // Copy to clipboard
  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    alert(`${label} copied to clipboard!`);
  };

  // Redirect to WhatsApp with form data
  const handlePaymentComplete = () => {
    const whatsappNumber = "14706591338"; // Format: country code + number (no spaces/symbols)

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

    // Open WhatsApp (works on both mobile and desktop)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    // Close modal after redirect
    setTimeout(() => {
      setShowForm(false);
      setShowZelleDetails(false);
      setFormData({ name: "", email: "", phone: "", address: "" });
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
            <button className="close-btn" onClick={handleCloseModal}>
              ×
            </button>

            {!showZelleDetails ? (
              <>
                <h3>Complete Your Purchase</h3>

                {/* Book Details */}
                <div className="book-summary">
                  <img src={book.image} alt={book.title} />
                  <div className="book-summary-info">
                    <h4>{book.title}</h4>
                    <p>Format: {book.format}</p>
                    <p className="price">${book.price}</p>
                  </div>
                </div>

                {/* Form Fields */}
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

                {/* Zelle Payment Details */}
                <div className="zelle-details">
                  <div className="zelle-info-box">
                    <div className="zelle-header">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                      </svg>
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
                          title="Copy email"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <rect
                              x="9"
                              y="9"
                              width="13"
                              height="13"
                              rx="2"
                              ry="2"
                            />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
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
                          title="Copy phone number"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <rect
                              x="9"
                              y="9"
                              width="13"
                              height="13"
                              rx="2"
                              ry="2"
                            />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
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
                      <li>Enter either the email or phone number above</li>
                      <li>
                        Send <strong>${book.price}</strong>
                      </li>
                      <li>After payment, click "Done" below</li>
                      <li>Send proof of payment via WhatsApp</li>
                    </ol>
                  </div>

                  <button
                    className="btn btn-primary btn-whatsapp"
                    onClick={handlePaymentComplete}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
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
