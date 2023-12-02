"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Footer({}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="w-full text-center min-h-[20vh] flex flex-col justify-end bg-cover"
    >
      {/* style={{backgroundImage: 'url(pixelr2.png)'}} */}

      <p className="font-light text-[#707070] lg:py-10 py-14 text-sm">
        2023 designed and build by{" "}
        <a href="https://ui.gugisek.pl/" target="_blank" rel="noreferrer">
          gugisek
        </a>
      </p>
    </motion.section>
  );
}
