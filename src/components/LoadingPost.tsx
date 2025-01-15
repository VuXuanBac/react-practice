export default function LoadingPost() {
  return (
    <div className="animate-pulse flex-col space-y-6 w-full shadow-md rounded-lg p-4 mb-4 bg-white">
      <div className="flex flex-1 space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 py-1">
          <div className="space-y-4">
            <div className="h-2 w-1/2 bg-slate-200 rounded"></div>
            <div className="h-2 w-1/3 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-2">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-200 rounded col-span-2"></div>
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-200 rounded"></div>
        <div className="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
}
