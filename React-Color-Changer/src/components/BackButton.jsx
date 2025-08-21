import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function BackButton({ to }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => (to ? navigate(to) : navigate(-1))}
      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 
                 bg-white shadow-sm hover:bg-gray-100 transition-colors"
    >
      <ArrowLeft size={18} />
      <span>Back</span>
    </button>
  );
}

export default BackButton;
