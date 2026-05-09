"use client";

import { MedicalMaskIcon } from "@hugeicons/core-free-icons";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { AppIcon } from "@/components/gatolinos/app-icon";
import { Motion } from "./motion";
import { PrimaryLink } from "./primary-link";
import { SecondaryLink } from "./secondary-link";
import { shellClassName } from "./shell";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = Motion.useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const mediaY = Motion.useTransform(scrollYProgress, [0, 1], [0, 56]);
  const mediaScale = Motion.useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const badgeY = Motion.useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <Motion.section
      ref={sectionRef}
      id="top"
      className="relative isolate overflow-hidden bg-surface-warm py-12 sm:py-16 lg:py-20"
    >
      <div
        className={`${shellClassName} grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:gap-16`}
      >
        <motion.div
          className="order-2 lg:order-1"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.1,
                staggerChildren: 0.12,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <p className="inline-flex rounded-full bg-secondary-container px-4 py-2 font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-on-secondary-container">
              Ronronados em esperança
            </p>
          </motion.div>
          <Motion.h1
            className="mt-7 max-w-4xl text-balance font-headline text-5xl font-extrabold leading-[0.95] tracking-[-0.05em] text-primary sm:text-6xl lg:text-7xl"
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            Bem-vindo ao Projeto Gatolinos Londrina
          </Motion.h1>
          <Motion.p
            className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-on-surface-variant sm:text-xl"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            Este é o cantinho onde transformamos ronronados em esperança.
            Explore, apaixone-se e ajude-nos a mudar vidas, segurando nossa
            patinha com doações, apadrinhamento e carinho.
          </Motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            <PrimaryLink href="#contribuir">Segure nossa patinha</PrimaryLink>
            <SecondaryLink href="#abordagem">Conheça o projeto</SecondaryLink>
          </motion.div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <motion.div
            className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[2.5rem] bg-surface-container-low p-5 shadow-[0_48px_80px_-40px_rgba(61,38,17,0.28)] sm:p-8 lg:mr-0 lg:max-w-none"
            initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ y: mediaY, scale: mediaScale }}
          >
            <Image
              src="/gatolinos/hero-art.png"
              alt="Composição artística minimalista com gatos em linhas delicadas"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 88vw"
              className="object-cover p-5 sm:p-8"
            />
          </motion.div>
          <motion.div
            className="relative -mt-10 ml-4 max-w-[15rem] rounded-[1.75rem] bg-white/90 p-5 shadow-[0_24px_60px_-28px_rgba(61,38,17,0.32)] ring-1 ring-outline-variant/30 backdrop-blur xl:-mt-16"
            initial={{ opacity: 0, x: -18, y: 18 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ y: badgeY }}
          >
            <div className="flex items-center gap-4">
              <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary-container">
                <AppIcon
                  icon={MedicalMaskIcon}
                  size={30}
                  className="text-on-secondary-container"
                />
              </div>
              <div>
                <p className="font-label text-[0.62rem] font-bold uppercase tracking-[0.28em] text-outline">
                  Movimento que acolhe
                </p>
                <p className="font-headline text-3xl font-bold text-primary">
                  Amor em ação
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Motion.section>
  );
}
