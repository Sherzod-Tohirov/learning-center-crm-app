import { Link } from "react-router-dom";
export function Error() {
    return (
        <div className="w-screen h-screen flex flex-col gap-6 items-center justify-center">
            <p className="text-center text-4xl text-red-500">Something went wrong!</p>
            <p className="text-center text-2xl text-slate-400">Try again later.</p>
            {/* <Link className={buttonVariants({variant: 'outline'})} to={'/'}>Go Back</Link> */}
        </div>
    )
}