"use client"; // Required for client-side functionality

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Select from "react-dropdown-select";

export default function Pagination({ blogs }) {
  const itemsPerPage = 6; // Number of blogs per page (3 per row in a grid layout)
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("desc"); // Default to descending order

  useEffect(() => {
    // Debounce search query updates with a 2-second delay
    const timeout = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  useEffect(() => {
    // Filter blogs based on the debounced search query
    let updatedBlogs = [...blogs];

    if (debouncedSearchQuery) {
      updatedBlogs = updatedBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
    }

    // Sort blogs by date
    updatedBlogs.sort((a, b) => {
      const parseDate = (dateString) => {
        const [day, month, year] = dateString.split("/").map(Number);
        return new Date(year, month - 1, day);
      };

      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);

      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setFilteredBlogs(updatedBlogs);
    setCurrentPage(1); // Reset to page 1 on search or sort
  }, [debouncedSearchQuery, blogs, sortOrder]);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  const options = Array.from({ length: totalPages }, (_, i) => ({
    label: `Page ${i + 1}`,
    value: i + 1,
  }));

  const handlePageChange = (selected) => {
    if (selected.length > 0) {
      setCurrentPage(selected[0].value);
    }
  };

  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-6">Blog Posts</h1>

      {/* Search Input */}
      <div className="mb-4 mx-auto max-w-[768px]">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-black w-full p-3 border rounded-md shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Sort Buttons */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setSortOrder("asc")}
          className={`px-4 py-2 mr-2 rounded-md ${
            sortOrder === "asc" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          Sort Asc
        </button>
        <button
          onClick={() => setSortOrder("desc")}
          className={`px-4 py-2 rounded-md ${
            sortOrder === "desc" ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          Sort Desc
        </button>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBlogs.map((blog) => (
  <Link
  href={`/blog/${blog.slug}`}
  key={blog.slug}
  className="bg-white border rounded-lg shadow-sm overflow-hidden group"
>
<div className="h-72 w-full overflow-hidden"> 
<Image
  src={`/${blog.card}`}
  alt={blog.title}
  width={300}
  height={200}
  className="w-full h-full object-cover transition-all group-hover:scale-110"
/></div> 
  <div className="p-4">
    <h3 className="text-xl font-bold mb-2 text-black">{blog.title}</h3>
    <p className="text-black font-semibold mb-4">{blog.date}</p>
    <p className="text-black mb-4">{blog.description}</p>
    <div className="text-primary hover:font-bold font-medium">
      Leer más
    </div>
  </div>
</Link>
        ))}
      </div>

      {/* Pagination Dropdown */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6">
          <Select
            options={options}
            onChange={handlePageChange}
            values={[options[currentPage - 1]]}
            placeholder="Select a page"
            className="w-64"
          />
        </div>
      )}
    </div>
  );
}
