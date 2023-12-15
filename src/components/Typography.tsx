import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ** third party library
import { motion as m, HTMLMotionProps } from "framer-motion";

type TypographyVariant =
   | "P_Bold_H1"
   | "P_Bold_H2"
   | "P_Bold_H3"
   | "P_Bold_H4"
   | "P_Bold_H5"
   | "P_Bold_H6"
   | "P_SemiBold_H1"
   | "P_SemiBold_H2"
   | "P_SemiBold_H3"
   | "P_SemiBold_H4"
   | "P_SemiBold_H5"
   | "P_SemiBold_H6"
   | "P_Medium_H1"
   | "P_Medium_H2"
   | "P_Medium_H3"
   | "P_Medium_H4"
   | "P_Medium_H5"
   | "P_Medium_H6"
   | "P_Medium_H7"
   | "P_Regular_H1"
   | "P_Regular_H2"
   | "P_Regular_H3"
   | "P_Regular_H4"
   | "P_Regular_H5"
   | "P_Regular_H6";

type TypographyAnimation = "move" | "underline";
type LinkDirection = "forward" | "back";

interface TypographyProps extends HTMLMotionProps<"span"> {
   mVariants?: any; // replace 'any' with the actual type
   mDelay?: number;
   variant: TypographyVariant;
   children: ReactNode;
   className?: string;
   maxLines?: number;
   navigate?: LinkDirection;
   link?: string;
   target?: string;
   animate?: TypographyAnimation;
   disableSelect?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
   mVariants,
   mDelay = 0,
   variant,
   children,
   className,
   maxLines = 0,
   navigate,
   link = "",
   target = "",
   animate = "",
   disableSelect = false,
   ...props
}) => {
   if (!variant) {
      throw new Error("variant is required");
   }

   const getClassName = (): string => {
      switch (variant) {
         // "Bold" - 700
         case "P_Bold_H1":
            return "font-poppins font-bold text-[40px] md:text-[62px] tracking-normal";
         case "P_Bold_H2":
            return "font-poppins font-bold text-[32px] md:text-[49px] tracking-normal";
         case "P_Bold_H3":
            return "font-poppins font-bold text-[24px] md:text-[39px] tracking-normal";
         case "P_Bold_H4":
            return "font-poppins font-bold text-[20px] md:text-[25px] tracking-normal";
         case "P_Bold_H5":
            return "font-poppins font-bold text-[16px] md:text-[20px] tracking-normal";
         case "P_Bold_H6":
            return "font-poppins font-bold text-[14px] md:text-[16px] tracking-normal";

         // "SemiBold" - 600
         case "P_SemiBold_H1":
            return "font-poppins font-semibold text-[40px] md:text-[62px] tracking-normal";
         case "P_SemiBold_H2":
            return "font-poppins font-semibold text-[32px] md:text-[49px] tracking-normal";
         case "P_SemiBold_H3":
            return "font-poppins font-semibold text-[24px] md:text-[39px] tracking-normal";
         case "P_SemiBold_H4":
            return "font-poppins font-semibold text-[20px] md:text-[25px] tracking-normal";
         case "P_SemiBold_H5":
            return "font-poppins font-semibold text-[16px] md:text-[20px] tracking-normal";
         case "P_SemiBold_H6":
            return "font-poppins font-semibold text-[14px] md:text-[16px] tracking-normal";

         // "Medium" - 500
         case "P_Medium_H1":
            return "font-poppins font-semibold text-[40px] md:text-[62px] tracking-normal";
         case "P_Medium_H2":
            return "font-poppins font-semibold text-[32px] md:text-[49px] tracking-normal";
         case "P_Medium_H3":
            return "font-poppins font-semibold text-[24px] md:text-[39px] tracking-normal";
         case "P_Medium_H4":
            return "font-poppins font-semibold text-[20px] md:text-[25px] tracking-normal";
         case "P_Medium_H5":
            return "font-poppins font-semibold text-[16px] md:text-[20px] tracking-normal";
         case "P_Medium_H6":
            return "font-poppins font-semibold text-[14px] md:text-[16px] tracking-normal";
         case "P_Medium_H7":
            return "font-poppins font-semibold text-[10px] md:text-[14px] tracking-normal";

         // "Regular" - 400
         case "P_Regular_H1":
            return "font-poppins font-normal text-[40px] md:text-[62px] tracking-normal";
         case "P_Regular_H2":
            return "font-poppins font-normal text-[32px] md:text-[49px] tracking-normal";
         case "P_Regular_H3":
            return "font-poppins font-normal text-[24px] md:text-[39px] tracking-normal";
         case "P_Regular_H4":
            return "font-poppins font-normal text-[20px] md:text-[25px] tracking-normal";
         case "P_Regular_H5":
            return "font-poppins font-normal text-[16px] md:text-[20px] tracking-normal";
         case "P_Regular_H6":
            return "font-poppins font-normal text-[14px] md:text-[16px] tracking-normal";

         default:
            return "";
      }
   };

   const fontTypes = getClassName();

   console.log({ fontTypes });

   const lineClampClass =
      maxLines > 0 ? `line-clamp-${maxLines?.toString()}` : "whitespace-normal";

   const getAnimationClass = (): string => {
      switch (animate) {
         case "move":
            return "hover:ml-1.5 transition-all duration-300";
         case "underline":
            return "hover:underline transition-all duration-300";
         default:
            return "";
      }
   };

   const animationClass = getAnimationClass();

   const router = useRouter();

   const handleNavigate = (): void => {
      if (navigate === "back") {
         router.back();
      } else {
         router.push(link);
      }
   };

   const content = (
      <m.span
         initial="hidden"
         whileInView="visible"
         variants={mVariants}
         transition={{ duration: 0.6, ease: "easeIn", delay: mDelay }}
         viewport={{ once: true }}
         className={`${fontTypes} ${className} ${lineClampClass} ${animationClass} overflow-wrap overflow-hidden leading-normal`}
         style={{ userSelect: disableSelect ? "none" : "auto" }}
         {...props}
         onClick={() => {
            if (props?.onClick) {
               props?.onClick();
            }
            if (navigate) {
               handleNavigate();
            }
         }}
      >
         {children}
      </m.span>
   );

   return link ? (
      <Link href={link}>
         <a target={target} className="max-w-fit">
            {content}
         </a>
      </Link>
   ) : (
      content
   );
};

Typography.defaultProps = {
   className: "",
   maxLines: 0,
};

export default Typography;
