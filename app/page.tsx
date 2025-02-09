// import Image from "next/image";
import { Htag, Ptag, Button } from "@/components";
export default function Home() {
  return (
    <div>
      <Htag tag="h2">Header</Htag>
      <Ptag size="small">ipsum dsfsdf ssdfsdf ssfdfsdfsfs sdfsdf</Ptag>
      <Ptag size="medium">ipsum dsfsdf ssdfsdf ssfdfsdfsfs sdfsdf</Ptag>
      <Ptag size="large">ipsum dsfsdf ssdfsdf ssfdfsdfsfs sdfsdf</Ptag>
      <Button appearance="primary" arrow="right">
        Click
      </Button>
      <Button appearance="secondary" arrow="right">
        Click
      </Button>
    </div>
  );
}
