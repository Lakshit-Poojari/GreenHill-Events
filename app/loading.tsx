"use client";


export default function Loading() {
  return (
    <div className="fixed inset-0 z-99999 flex items-center justify-center bg-black">
      <div className="relative h-80 w-80">
        <span className="ripple"></span>
        <span className="ripple delay-1"></span>
        <span className="ripple delay-2"></span>
      </div>
    </div>
  );
}