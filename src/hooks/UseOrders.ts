
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import GetOrders from "@/store/orders/act/GetOrders";
import { useEffect, useState } from "react";
import { IProducts } from "@/types/Shared";
import { resetOrder } from "@/store/orders/OrdersSlice";

const UseOrders = ()=> {
    const dispatch = useAppDispatch();
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<IProducts[]>([]);
    const viewDetailsHandler = (subtotal: number) => {
        const productDetails = orderList.find(order => order.subtotal === subtotal);
        const newItems  = productDetails?.items ?? []
        setShowModal(true);
         setSelectedProduct(prev => [...prev, ...newItems])
    }
    const closeModalHandler = () => {
        setShowModal(false);
        setSelectedProduct([]);
    }
    useEffect(()=> {
        dispatch(GetOrders());
        return () => {dispatch(resetOrder())}; // cleanup hook to reset the state when component unmounts  //
    },[dispatch]);
    const { orderList, loading, error } = useAppSelector((state) => state.orders);
    return { orderList, loading, error, closeModalHandler, viewDetailsHandler, showModal, selectedProduct }
}

export default UseOrders;