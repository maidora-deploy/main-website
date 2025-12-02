import { useEffect } from "react";

export default function GoogleTranslate({ onLoad }) {
  useEffect(() => {
    if (!window.googleTranslateScriptAdded) {
      window.googleTranslateScriptAdded = true;

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,ar,fr,de,th,ms,ta,bn",
          autoDisplay: false,
        },
        "google_translate_element"
      );

      // 🔥 Notify parent that Google Translate is ready
      if (onLoad) onLoad();
    };
  }, [onLoad]);

  return <div id="google_translate_element" style={{ display: "none" }}></div>;
}
