"use client";

import Image from "next/image";
import Typography from "../components/Typography";
import { siteConfig } from "../../configs/site.config";

export default function Home() {
   return (
      <>
         <Typography variant="P_Regular_H3" className="uppercase">{siteConfig.title}</Typography>
      </>
   );
}
