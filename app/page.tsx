"use client";

import React, { useState, useEffect } from "react";
import { Htag, Ptag, Button, Tag, Rating } from "@/components";
export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [rating, setRating] = useState<number>(1);
  useEffect(() => {}, [count]);

  return (
    <div>
      <Htag tag="h2">{count}</Htag>
      <Ptag size="small">small</Ptag>
      <Ptag size="medium">medium</Ptag>
      <Ptag size="large">large</Ptag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCount(count + 1)}
      >
        Click
      </Button>
      <Button appearance="secondary" arrow="right">
        Click
      </Button>

      <Tag size="small" color="ghost">
        SMALL
      </Tag>
      <Tag size="medium" color="red">
        MEDIUM
      </Tag>
      <Tag size="small" color="green">
        green
      </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </div>
  );
}
