import { useState } from "react";

export default function LanguageSelector() {
  const [ready, setReady] = useState(false);

  const changeLanguage = (lang) => {
    if (!ready) {
      console.warn("Google Translate not ready yet");
      return;
    }

    const iframe = document.querySelector("iframe.goog-te-menu-frame");
    if (!iframe) return;

    const innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    const langButtons = innerDoc.querySelectorAll(".goog-te-menu2-item div");

    langButtons.forEach((btn) => {
      if (btn.innerHTML.includes(lang)) btn.click();
    });
  };

  return (
    <>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ar">Arabic</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="th">Thai</option>
        <option value="ms">Malay</option>
        <option value="ta">Tamil</option>
        <option value="bn">Bengali</option>
      </select>

      {/* hidden component load tracker */}
      <span id="langReady" style={{ display: "none" }}>
        {ready.toString()}
      </span>
    </>
  );
}
