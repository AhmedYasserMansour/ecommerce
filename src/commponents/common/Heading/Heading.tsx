import { memo } from "react";

const Heading = ({title}: {title: string}) => {
  return (
    <h2>{title}</h2>
  )
}

export default memo(Heading);
