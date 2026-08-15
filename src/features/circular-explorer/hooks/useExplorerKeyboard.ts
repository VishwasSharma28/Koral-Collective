"use client";

import { useEffect } from "react";

type UseExplorerKeyboardOptions = {
  totalCards: number;
  activeCardIndex: number;
  onSelectIndex: (index: number) => void;
  disabled?: boolean;
};

export function useExplorerKeyboard({
  totalCards,
  activeCardIndex,
  onSelectIndex,
  disabled = false,
}: UseExplorerKeyboardOptions) {
  useEffect(() => {
    if (disabled || totalCards <= 0 || typeof window === "undefined") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if active element is inside stage or no form input is focused
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName || "")) {
        return;
      }

      switch (e.key) {
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          onSelectIndex(Math.max(0, activeCardIndex - 1));
          break;
        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          onSelectIndex(Math.min(totalCards - 1, activeCardIndex + 1));
          break;
        case "Home":
          e.preventDefault();
          onSelectIndex(0);
          break;
        case "End":
          e.preventDefault();
          onSelectIndex(totalCards - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalCards, activeCardIndex, onSelectIndex, disabled]);
}
