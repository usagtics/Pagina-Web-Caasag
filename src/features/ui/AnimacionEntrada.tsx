"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimacionEntradaProps {
  children: ReactNode;
  direccion?: "izquierda" | "derecha" | "arriba" | "abajo" | "ninguna";
  retraso?: number;
  alCargar?: boolean;
  className?: string;
}

export function AnimacionEntrada({
  children,
  direccion = "arriba",
  retraso = 0,
  alCargar = false,
  className = "",
}: AnimacionEntradaProps) {
  const variantes: Variants = {
    oculto: {
      opacity: 0,
      x: direccion === "izquierda" ? -30 : direccion === "derecha" ? 30 : 0,
      y: direccion === "arriba" ? 30 : direccion === "abajo" ? -30 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: retraso },
    },
  };

  if (alCargar) {
    return (
      <motion.div
        initial="oculto"
        animate="visible"
        variants={variantes}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="oculto"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variantes}
      className={className}
    >
      {children}
    </motion.div>
  );
}
