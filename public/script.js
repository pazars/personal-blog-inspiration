// ===== Theme Toggle =====
(function () {
  const getThemePreference = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const applyTheme = (theme) => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  };

  // Apply on load
  applyTheme(getThemePreference());

  // Toggle button
  const themeToggle = document.querySelector("[data-js-theme-toggle]");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }
})();

// ===== Mobile Navigation =====
(function () {
  const toggleNavContainer = document.querySelector(
    "[data-js-toggle-nav-container]"
  );
  const navButton = document.querySelector("[data-js-nav-button]");
  const navInput = document.querySelector("[data-js-nav-input]");
  const menuCollapsed = document.querySelector("[data-js-menu-collapsed]");
  const menuExpanded = document.querySelector("[data-js-menu-expanded]");
  const line = document.querySelector("[data-js-line]");
  const contact = document.querySelector("[data-js-contact]");

  if (!navButton || !navInput) return;

  const toggleNav = () => {
    const isChecked = navInput.checked;
    navButton.classList.toggle("btn-invisible", !isChecked);
    navButton.classList.toggle("btn-secondary", isChecked);
    if (menuCollapsed) {
      menuCollapsed.classList.toggle("d-flex", !isChecked);
      menuCollapsed.classList.toggle("d-none", isChecked);
    }
    if (menuExpanded) {
      menuExpanded.classList.toggle("d-none", !isChecked);
      menuExpanded.classList.toggle("d-flex", isChecked);
    }
    if (line) {
      line.classList.toggle("d-none", isChecked);
      line.classList.toggle("d-block", !isChecked);
    }
    if (contact) {
      contact.classList.toggle("d-none", isChecked);
      contact.classList.toggle("d-block", !isChecked);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 544) {
      navInput.checked = false;
      toggleNav();
    }
  };

  navButton.addEventListener("click", () => {
    navInput.checked = !navInput.checked;
    toggleNav();
  });

  document.addEventListener("click", (event) => {
    if (!toggleNavContainer.contains(event.target)) {
      navInput.checked = false;
      toggleNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navInput.checked = false;
      toggleNav();
    }
  });

  window.addEventListener("resize", handleResize);
  handleResize();
})();

// ===== Dropdown =====
(function () {
  const dropdownTriggers = document.querySelectorAll(
    "[data-js-dropdown-trigger]"
  );
  const dropdownPanels = document.querySelectorAll("[data-js-dropdown-panel]");

  function closeOpenDropdowns() {
    dropdownPanels.forEach((menu) => {
      menu.classList.remove("-show");
    });
  }

  dropdownTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      const panel = trigger.nextElementSibling;
      const shouldOpen = !panel.classList.contains("-show");
      event.preventDefault();

      closeOpenDropdowns();
      if (shouldOpen) {
        panel.classList.add("-show");
        // Hide tooltips
        document
          .querySelectorAll("[data-js-tooltip-text]")
          .forEach((tooltip) => {
            tooltip.setAttribute("data-visible", "false");
          });
      }
    });
  });

  dropdownPanels.forEach((panel) => {
    panel.addEventListener("click", () => {
      closeOpenDropdowns();
    });
  });

  window.addEventListener("click", (event) => {
    if (
      !event.target.closest("[data-js-dropdown-trigger]") &&
      !event.target.closest("[data-js-dropdown-panel]")
    ) {
      closeOpenDropdowns();
    }
  });

  window.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Escape") {
        closeOpenDropdowns();
      }
    },
    true
  );
})();

// ===== Copy to Clipboard =====
(function () {
  const copyBtn = document.querySelector("[data-js-copy-to-clipboard]");
  if (!copyBtn) return;

  copyBtn.addEventListener("click", function () {
    const textToCopy = this.getAttribute("data-js-clipboard-text");
    const triggerEl = document.querySelector("[data-js-dropdown-trigger]");

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        showTooltip(triggerEl, "Copied to clipboard!");
      })
      .catch(() => {
        showTooltip(triggerEl, "Failed to copy", 3000);
      });
  });

  function showTooltip(element, message, duration = 2000) {
    // Remove existing dynamic tooltips
    document
      .querySelectorAll(".tooltip[data-visible='true']")
      .forEach((t) => t.remove());

    const tooltip = document.createElement("span");
    tooltip.classList.add("tooltip");
    tooltip.setAttribute("data-position", "bottom");
    tooltip.setAttribute("data-visible", "true");
    tooltip.textContent = message;
    element.appendChild(tooltip);

    setTimeout(() => tooltip.remove(), duration);
  }
})();

// ===== Tooltips =====
(function () {
  const tooltipContainers = document.querySelectorAll(
    "[data-js-tooltip-container]"
  );
  const minWidthSm = window.matchMedia("(min-width: 544px)");

  tooltipContainers.forEach((container) => {
    const tooltipText = container.querySelector("[data-js-tooltip-text]");
    if (!tooltipText) return;

    const showTooltip = () => {
      if (!minWidthSm.matches) return;
      document.querySelectorAll(".tooltip").forEach((t) => {
        t.setAttribute("data-visible", "false");
      });
      tooltipText.setAttribute("data-visible", "true");
    };

    const hideTooltip = () => {
      tooltipText.setAttribute("data-visible", "false");
    };

    container.addEventListener("mouseenter", showTooltip);
    container.addEventListener("mouseleave", hideTooltip);

    const focusables = container.querySelectorAll(
      "a, button, input, textarea, select, [tabindex]"
    );
    focusables.forEach((el) => {
      el.addEventListener("focus", showTooltip);
      el.addEventListener("blur", hideTooltip);
    });
  });
})();
