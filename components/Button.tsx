import { RiArrowRightLine } from "@remixicon/react";

export default function Button({label}: {label: string}) {
  return (<>
    <button className="flex items-center gap-2 bg-secondary px-8 py-3.5 rounded-xl max-w-max btn font-bold text-btnClr hover:scale-105 transition-transform">
      {label}
      <span>
        <RiArrowRightLine />
      </span>
    </button>
  </>)
}
