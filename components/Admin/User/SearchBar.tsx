import { Search } from "lucide-react";
import React from "react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  role: string;
  setRole: (value: string) => void;
}

const SearchBar = ({ search, setSearch, role, setRole }: SearchBarProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-700 bg-[#181616] p-5 shadow-lg md:flex-row 
      md:items-center md:justify-between">
      {/* Search */}
      <div className="relative w-full md:max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email..."
          className="w-full rounded-lg border border-gray-700 bg-[#232121] py-2.5 pl-10 pr-4 text-sm text-white 
          placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-[#C9AC8C]"
        />
      </div>

      {/* Filter */}
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="rounded-lg border border-gray-700 bg-[#232121] px-4 py-2.5 text-sm text-white outline-none transition-all 
          duration-300 focus:border-[#C9AC8C]"
      >
        <option value="ALL">All Roles</option>
        <option value="SUPER_ADMIN">Super Admin</option>
        <option value="ADMIN">Admin</option>
      </select>
    </div>
  );
};

export default SearchBar;
