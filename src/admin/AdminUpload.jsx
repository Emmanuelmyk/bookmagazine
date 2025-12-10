import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const AdminUpload = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!title || !price || !pdfFile) {
      setMessage("Please fill all fields.");
      setLoading(false);
      return;
    }

    try {
      // 1. Upload to Supabase Storage
      const fileName = `${Date.now()}-${pdfFile.name}`;

      const { data: storageData, error: storageError } = await supabase.storage
        .from("books")
        .upload(fileName, pdfFile);

      if (storageError) throw storageError;

      // 2. Insert metadata into table
      const { data: insertData, error: insertError } = await supabase
        .from("books")
        .insert([
          {
            title,
            price: Number(price),
            pdf_path: storageData.path,
          },
        ]);

      if (insertError) throw insertError;

      setMessage("Book uploaded successfully!");
      setTitle("");
      setPrice("");
      setPdfFile(null);
    } catch (error) {
      console.error(error);
      setMessage("Upload failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", padding: 20 }}>
      <h2>Admin – Upload Book PDF</h2>
      <form onSubmit={handleUpload}>
        <label>Book Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />

        <label>Price (₦)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input"
        />

        <label>PDF File</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload PDF"}
        </button>

        {message && <p style={{ marginTop: 20 }}>{message}</p>}
      </form>
    </div>
  );
};

export default AdminUpload;
