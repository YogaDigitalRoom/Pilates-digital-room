"use client";

import React, { useState, useEffect } from "react";
import Select from "react-dropdown-select";

export default function Pagination({ blogs = [] }) {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  useEffect(() => {
    let updatedBlogs = [...blogs];

    if (debouncedSearchQuery) {
      updatedBlogs = updatedBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
    }

    updatedBlogs.sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split("/").map(Number);
      const [dayB, monthB, yearB] = b.date.split("/").map(Number);
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setFilteredBlogs(updatedBlogs);
    setCurrentPage(1);
  }, [debouncedSearchQuery, blogs, sortOrder]);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const options = Array.from({ length: totalPages }, (_, i) => ({
    label: `Página ${i + 1}`,
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
    <div className="mt-8 max-w-5xl mx-auto">
      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-6 text-black"
      />

      {/* Ordenar */}
      <div className="flex justify-end mb-4 gap-4">
        <button onClick={() => setSortOrder("asc")} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Más antiguos
        </button>
        <button onClick={() => setSortOrder("desc")} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Más recientes
        </button>
      </div>

      {/* Dropdown de páginas */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <Select
            options={options}
            onChange={handlePageChange}
            values={[options[currentPage - 1]]}
            placeholder="Selecciona página"
            className="w-64"
          />
        </div>
      )}
    </div>
  );
}
