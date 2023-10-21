export default function NavbarSkeleton() {
    return <div role="status" className="flex max-w-sm animate-pulse">
    <div className="hidden sm:block my-auto bg-purple rounded-full h-6 w-48"></div>
    <div className="w-10 h-10 bg-red mx-2 sm:mx-4 sm:bg-purple rounded-full"></div>
    <div className="h-10 w-24 bg-red sm:bg-purple rounded-full "></div>
  </div>
}