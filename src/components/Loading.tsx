export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-y-4 border-t-blue-600 border-b-blue-300 border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
