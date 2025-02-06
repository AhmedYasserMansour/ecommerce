import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { categoriesCleanUp } from "@store/categories/act/CategoriesSlice";
import getCategories from "@store/categories/act/getCategories";

const UseCategories = () => {
    const dispatch = useAppDispatch();
    const {loading, error, categories} = useAppSelector(state => state.categories);
    useEffect(()=> {
        dispatch(getCategories());
      return ()=> {
        dispatch(categoriesCleanUp())
      }
    },[dispatch]);
  return (
    {loading, error, categories}
  )
}

export default UseCategories;
