import { PhotoIcon } from "@heroicons/react/24/outline";

export default function SkeletonLoading({ cards }: { cards: number}) {
  return Array(cards)
    .fill(true)
    .map((_, i) => (
      <div key={i} role="status" className="w-56 h-[308px] border rounded-lg border-gray-200 shadow animate-pulse dark:border-gray-700">
        <figure className="flex items-center justify-center w-full h-[224px] mb-3 bg-gray-300 rounded-t-lg dark:bg-gray-800 ">
            <PhotoIcon className="w-14 h-14 text-gray-200 dark:text-gray-600" />
        </figure>
        <div className="flex flex-col items-center justify-center">
            <span className="w-52 h-4 bg-gray-200 rounded-full dark:bg-gray-800 mb-3"></span>

        <div 
                className="w-32 h-7 flex items-center px-5 py-1.5 text-sm transition ease-in-out duration-200 rounded-lg dark:bg-gray-800"
            >
        </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    ));
}
