import { TLoading } from "@CustomTypes/Shared";
import Categoryskeleton from "../skeletons/Categoryskeleton";
import ProductsSkeleton from "../skeletons/ProductsSkeleton";
import LottieHandler from "@/commponents/feedback/lottieHandler/LottieHandler";
import TableSkeleton from "../skeletons/TableSkeleton";
import CartSkeleton from "../skeletons/CartSkeleton";
const skeletonsTypes = {
    products: ProductsSkeleton,
    categories : Categoryskeleton,
    table: TableSkeleton,
    cart: CartSkeleton,
}

interface LoadingProps {
    status : TLoading,
    error : string | null,
    children : React.ReactNode
    type?: keyof typeof skeletonsTypes;
}
const Loading = ({status,error, children, type = 'categories'}: LoadingProps) => {
  const Commponent = skeletonsTypes[type]
    if(status === 'pending') {
        return <Commponent/>
    }
    if(status === 'failed') {
        return <div><LottieHandler type="error" message={error as string}/></div>
    }
  return (
    <>{children}</>
  )
}

export default Loading;
