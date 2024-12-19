"use client";

export default function PrintSyllabus() {
  const handleWindowPrint = () => {
    window.print();
  };

  return (
    <button
      className="w-full sm:w-fit bg-green-500 hover:bg-green-500/90 xl:absolute xl:top-7 xl:-right-24 rounded-lg px-4 py-2 cursor-pointer print:hidden mb-8"
      onClick={handleWindowPrint}
    >
      Print
    </button>
  );
}
