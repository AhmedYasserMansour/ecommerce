import { Category } from "@commponents/ecomerce/index";
import { Loading } from "@commponents/feedback/Loading";
import { GridList } from "@commponents/common";
import UseCategories from "@hooks/UseCategories";
const Categories = () => {
  const {loading, error, categories} = UseCategories();
  return (
      <Loading status={loading} error={error} type="categories">
          <GridList message="There are no categories" records={categories}
           item={(category) => <Category {...category} />} />
      </Loading>
  );
};

export default Categories;