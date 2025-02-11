// import Image from "next/image";
import { Htag, Ptag, Button, Tag } from "@/components";
export default function Home() {
  return (
    <div>
      <Htag tag="h2">Header</Htag>
      <Ptag size="small">small</Ptag>
      <Ptag size="medium">medium</Ptag>
      <Ptag size="large">large</Ptag>
      <Button appearance="primary" arrow="right">
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
    </div>
  );
}
