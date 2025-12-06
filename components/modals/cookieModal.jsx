"use client";

import { useEffect } from "react";
import Btn from "@/components/ui/Btn";

export default function CookieModal() {
  useEffect(() => {
    const modal = document.getElementById("cookie-modal");
    const acceptBtn = document.getElementById("cookie-accept");
    const declineBtn = document.getElementById("cookie-decline");

    // Check for consent
    const consent = localStorage.getItem("cookie-consent");

    // Show modal if no consent was given
    if (!consent) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // prevent scrolling
    }

    function acceptCookies() {
      localStorage.setItem("cookie-consent", "accepted");
      closeModal();
    }

    function declineCookies() {
      // Don’t store anything — show again on next visit
      closeModal();
    }

    function closeModal() {
      modal.classList.add("hidden");
      document.body.style.overflow = ""; // re-enable scroll
    }

    acceptBtn.addEventListener("click", acceptCookies);
    declineBtn.addEventListener("click", declineCookies);

    // Clean up
    return () => {
      acceptBtn.removeEventListener("click", acceptCookies);
      declineBtn.removeEventListener("click", declineCookies);
    };
  }, []);

  return (
    <div
      id="cookie-modal"
      className="cookie-modal hidden fixed inset-0 bg-primary-transparent-backdrop backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div className="relative bg-purple-50 rounded-2xl p-8 text-center max-w-[920px] mx-auto shadow-xl border-purple-500 border-4 ">
        <p className="text-sm text-gray-600 mb-2">I’m currently</p>
        <h2>
          COOKIE-FREE!
        </h2>
        <p className="text-gray-700 mb-6">
          I’m not tracking you. I might <span className="text-purple-600 font-medium"> save some data</span> <br/> in your browser to enhance your experience.
        </p>
        <div className="flex flex-col gap-2 items-center">
          <Btn variant="primary" id="cookie-accept">
          Okey-dokey
          </Btn>
          <Btn variant="secondary" id="cookie-decline">
          No, thank you
          </Btn>
        </div>
      </div>
    </div>
  );
}
