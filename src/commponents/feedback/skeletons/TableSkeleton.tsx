import ContentLoader from "react-content-loader";

const TableSkeleton = () => (
  <ContentLoader 
  speed={1}
  width='100%'
  height={124}
  viewBox="0 0 476 124"
  backgroundColor="#4f4f4f"
  foregroundColor="#e3d9d9"
>
  <rect x="-10" y="3" rx="3" ry="3" width="150" height="6" /> 
  <rect x="156" y="3" rx="3" ry="3" width="150" height="6" /> 
  <rect x="-10" y="30" rx="3" ry="3" width="150" height="6" /> 
  <rect x="159" y="29" rx="3" ry="3" width="150" height="6" /> 
  <rect x="-3" y="62" rx="3" ry="3" width="150" height="6" /> 
  <rect x="162" y="60" rx="3" ry="3" width="150" height="6" /> 
  <rect x="163" y="89" rx="3" ry="3" width="150" height="6" /> 
  <rect x="332" y="29" rx="3" ry="3" width="150" height="6" /> 
  <rect x="329" y="1" rx="3" ry="3" width="150" height="6" /> 
  <rect x="335" y="89" rx="3" ry="3" width="150" height="6" /> 
  <rect x="-1" y="90" rx="3" ry="3" width="150" height="6" /> 
  <rect x="334" y="60" rx="3" ry="3" width="150" height="6" />
</ContentLoader>
);

export default TableSkeleton;