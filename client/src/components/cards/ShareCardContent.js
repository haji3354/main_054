import React from "react";
import styled from "styled-components";
import ShareCard from "./ShareCard";

const ShareCardContent = ({ data, number }) => {
  return (
    <CardContent>
      {data !== null &&
        data
          .map((el) => (
            <ShareCard
              key={el.productId}
              id={el.productId}
              title={el.title}
              description={el.description}
              status={el.status}
              image01={el.image.image01}
            />
          ))
          .slice(0, number)}
    </CardContent>
  );
};

export default ShareCardContent;

const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
