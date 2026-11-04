for (const button of document.querySelectorAll("[data-copy]")) {
  button.addEventListener("click", async () => {
    const prompt = button.closest(".prompt-box")?.querySelector("pre code")?.textContent?.trim();
    const status = button.parentElement.querySelector(".copy-status");
    if (!prompt || !status) return;
    try {
      await navigator.clipboard.writeText(prompt);
      status.textContent = "Prompt copied. Paste it into Codex.";
    } catch {
      status.textContent = "Copy is unavailable here. Select the prompt text and copy it.";
    }
  });
}
