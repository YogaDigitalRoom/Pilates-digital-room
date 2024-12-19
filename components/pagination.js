"use client"; // Required for client-side functionality

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Select from "react-dropdown-select";

export default function Pagination({ blogs }) {
  const itemsPerPage = 5; // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  useEffect(() => {
    // Debounce search query updates with a 2-second delay
    const timeout = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  useEffect(() => {
    // Filter blogs based on the debounced search query
    if (debouncedSearchQuery) {
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
      setFilteredBlogs(filtered);
      setCurrentPage(1); // Reset to page 1 on search
    } else {
      setFilteredBlogs(blogs);
    }
  }, [debouncedSearchQuery, blogs]);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  const handlePageChange = (selected) => {
    if (selected.length > 0) {
      setCurrentPage(selected[0].value);
    }
  };

  const options = Array.from({ length: totalPages }, (_, i) => ({
    label: `Page ${i + 1}`,
    value: i + 1,
  }));

  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <h1>Blog Posts</h1>

      {/* Search Input */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
          }}
        />
      </div>

      {/* Blog List */}
      <ul>
        {currentBlogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              <h2>{blog.title}</h2>
            </Link>
          </li>
        ))}
      </ul>

      {/* Pagination Dropdown */}
      {totalPages > 1 && (
        <div style={{ marginTop: "20px" }}>
          <Select
            options={options}
            onChange={handlePageChange}
            values={[options[currentPage - 1]]}
            placeholder="Select a page"
            dropdownGap={5}
          />
        </div>
      )}
    </div>
  );
}
