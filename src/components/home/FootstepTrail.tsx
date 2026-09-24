"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Footprint = {
    id: number;
    x: number;
    y: number;
    rotation: number;
    side: "left" | "right";
};

const MAX_FOOTPRINTS = 10;

// More distance between each step.
const STEP_DISTANCE = 42;

// Wider natural walking stance.
const SIDE_DISTANCE = 13;

function FootprintShape({
    side,
}: {
    side: "left" | "right";
}) {
    return (
        <svg
            width="44"
            height="30"
            viewBox="0 0 26 54"
            fill="none"
            className={side === "right" ? "-scale-x-100" : ""}
            aria-hidden="true"
        >
            {/* Toes */}
            <circle cx="13" cy="5" r="2.8" fill="#f3e8d2" />
            <circle cx="8.5" cy="7" r="2.4" fill="#f3e8d2" />
            <circle cx="17.5" cy="7" r="2.4" fill="#f3e8d2" />
            <circle cx="5.5" cy="10" r="2.1" fill="#f3e8d2" />
            <circle cx="20.5" cy="10" r="2.1" fill="#f3e8d2" />

            {/* Forefoot */}
            <path
                d="
          M7.5 12
          C6.2 15.5 6.5 20.5 7.7 24
          C8.8 27.2 10.7 29 13 29
          C15.3 29 17.2 27.2 18.3 24
          C19.5 20.5 19.8 15.5 18.5 12
          C17.3 10.4 15.5 9.5 13 9.5
          C10.5 9.5 8.7 10.4 7.5 12Z
        "
                fill="#f3e8d2"
            />

            {/* Arch */}
            <path
                d="
          M8.8 23
          C8 27.5 8.5 33 10 36
          C10.7 37.5 11.8 38.5 13 38.5
          C14.2 38.5 15.3 37.5 16 36
          C17.5 33 18 27.5 17.2 23
          C16 26 14.7 27.2 13 27.2
          C11.3 27.2 10 26 8.8 23Z
        "
                fill="#f3e8d2"
            />

            {/* Heel */}
            <path
                d="
          M10 35
          C8.3 38 7.8 42.5 8.7 46.5
          C9.4 49.2 11 50.8 13 50.8
          C15 50.8 16.6 49.2 17.3 46.5
          C18.2 42.5 17.7 38 16 35
          C15.1 36 14.1 36.6 13 36.6
          C11.9 36.6 10.9 36 10 35Z
        "
                fill="#f3e8d2"
            />
        </svg>
    );
}

export function FootstepTrail() {
    const containerRef = useRef<HTMLDivElement>(null);

    const lastPosition = useRef<{
        x: number;
        y: number;
    } | null>(null);

    const nextFoot = useRef<"left" | "right">("left");

    const idCounter = useRef(0);

    const [footprints, setFootprints] = useState<Footprint[]>([]);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const container = containerRef.current;

            if (!container) return;

            const rect = container.getBoundingClientRect();

            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Only create footprints inside the trail area.
            if (
                mouseX < rect.left ||
                mouseX > rect.right ||
                mouseY < rect.top ||
                mouseY > rect.bottom
            ) {
                lastPosition.current = null;
                return;
            }

            const x = mouseX - rect.left;
            const y = mouseY - rect.top;

            if (!lastPosition.current) {
                lastPosition.current = { x, y };
                return;
            }

            const dx = x - lastPosition.current.x;
            const dy = y - lastPosition.current.y;

            const distance = Math.hypot(dx, dy);

            if (distance < STEP_DISTANCE) {
                return;
            }

            const angle = Math.atan2(dy, dx);

            const perpendicularX = -Math.sin(angle);
            const perpendicularY = Math.cos(angle);

            const side =
                nextFoot.current === "left" ? -1 : 1;

            const footX =
                x + perpendicularX * SIDE_DISTANCE * side;

            const footY =
                y + perpendicularY * SIDE_DISTANCE * side;

            const footprint: Footprint = {
                id: idCounter.current++,
                x: footX,
                y: footY,
                rotation: angle * (180 / Math.PI) + 90,
                side: nextFoot.current,
            };

            setFootprints((current) => [
                ...current.slice(-(MAX_FOOTPRINTS - 1)),
                footprint,
            ]);

            lastPosition.current = { x, y };

            nextFoot.current =
                nextFoot.current === "left"
                    ? "right"
                    : "left";
        };

        const resetPosition = () => {
            lastPosition.current = null;
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove,
            { passive: true }
        );

        window.addEventListener(
            "blur",
            resetPosition
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            window.removeEventListener(
                "blur",
                resetPosition
            );
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            aria-hidden="true"
        >
            <AnimatePresence>
                {footprints.map((footprint) => (
                    <motion.div
                        key={footprint.id}
                        className="absolute"
                        style={{
                            left: footprint.x,
                            top: footprint.y,
                            width: 20,
                            height: 42,
                            transformOrigin: "center",
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0.75,
                            rotate: footprint.rotation,
                        }}
                        animate={{
                            opacity: [0, 0.62, 0.38, 0],
                            scale: [0.75, 1, 1, 0.94],
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.75,
                            ease: "easeOut",
                            times: [0, 0.12, 0.55, 1],
                        }}
                        onAnimationComplete={() => {
                            setFootprints((current) =>
                                current.filter(
                                    (item) => item.id !== footprint.id
                                )
                            );
                        }}
                    >
                        <FootprintShape side={footprint.side} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}