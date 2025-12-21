import {DivideCircle, LoaderIcon} from "lucide-react";

function loader() {
  return (
    <div className="flex items-center justify-center h-screen">
        <LoaderIcon className="size-10 animate-spin" />
      
    </div>
  )
}

export default loader
