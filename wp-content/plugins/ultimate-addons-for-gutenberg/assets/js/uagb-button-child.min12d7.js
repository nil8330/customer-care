UAGBButtonChild={init(e){const t=document.querySelector(e);t&&(t.addEventListener("focusin",()=>{document.addEventListener("keydown",this.handleKeyDown)}),t.addEventListener("focusout",()=>{document.removeEventListener("keydown",this.handleKeyDown)}))},handleKeyDown(e){" "!==e.key&&"Spacebar"!==e.key||"A"===e.target.tagName&&e.target.classList.contains("uagb-buttons-repeater")&&(e.preventDefault(),e.target.click())}};