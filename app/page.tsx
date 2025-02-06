// import Image from "next/image";
import { Htag, Button } from "@/components";
export default function Home() {
  return (
    <div>
      <Htag tag="h2">text</Htag>
      <Button appearance="primary" arrow="right">
        Click
      </Button>
      <Button appearance="secondary" arrow="right">
        Click
      </Button>
    </div>
  );
}
