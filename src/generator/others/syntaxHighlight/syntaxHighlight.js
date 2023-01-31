import "./syntaxHighlight.scss";
import { w3CodeColor } from "./variables";

const syntaxHighlight = () => {
  let keyIsDown = false;
  const codeTextareas = document.querySelectorAll(
    `textarea[id^=html_content_]:not(.fake-input-is-ready),
    [id^=html_product_block_]:not(.fake-input-is-ready),
    [id^=terms_and_condition_content_]:not(.fake-input-is-ready),
    [id^=terms_and_condition_extended_terms_content_]:not(.fake-input-is-ready)`
  );
  codeTextareas.forEach((codeTextarea) => {
    // hide oryginal inputs
    codeTextarea.classList.add("fake-input-is-ready");

    // create fake input
    const codeDiv = document.createElement("div");
    codeDiv.setAttribute("contenteditable", "true");
    codeDiv.classList.add("chill-syntax-hl-container");
    codeTextarea.parentElement.appendChild(codeDiv);
    const oryginalCode = codeTextarea.value;
    codeDiv.innerText = codeTextarea.value;

    // highlight function
    const hlt = (e) => {
      if (
        !e.shiftKey &&
        (!e.ctrlKey ||
          (e.code === "KeyZ" && e.ctrlKey) ||
          (e.code === "KeyV" && e.ctrlKey)) &&
        !e.altKey &&
        e.key !== "Shift" &&
        e.key !== "Control" &&
        e.key !== "Alt" &&
        e.key !== "ArrowRight" &&
        e.key !== "ArrowUp" &&
        e.key !== "ArrowDown" &&
        e.key !== "CapsLock" &&
        e.key !== "Fn" &&
        e.key !== "NumLock" &&
        e.key !== "End" &&
        e.key !== "Home" &&
        e.key !== "PageDown" &&
        e.key !== "PageUp" &&
        e.key !== "ContextMenu" &&
        e.key !== "Escape" &&
        e.key !== "PrintScreen" &&
        e.key !== "F1" &&
        e.key !== "F2" &&
        e.key !== "F3" &&
        e.key !== "F4" &&
        e.key !== "F5" &&
        e.key !== "F6" &&
        e.key !== "F7" &&
        e.key !== "F8" &&
        e.key !== "F9" &&
        e.key !== "F10" &&
        e.key !== "11" &&
        e.key !== "12" &&
        e.key !== "Backspace" &&
        e.key !== "Delete" &&
        e.code !== "Enter" &&
        e.code !== "NumpadEnter"
      ) {
        // manage paste event
        if (e.type === "paste") {
          const selection = window.getSelection();
          selection.deleteFromDocument();
        }
        // copy code from fake input to oryginal textarea
        codeTextarea.value = codeDiv.innerText;

        // get caret position
        function getCaretIndex(element) {
          let position = 0;
          const isSupported = typeof window.getSelection !== "undefined";
          if (isSupported) {
            const selection = window.getSelection();
            if (selection.rangeCount !== 0) {
              const range = window.getSelection().getRangeAt(0);
              const preCaretRange = range.cloneRange();
              preCaretRange.selectNodeContents(element);
              preCaretRange.setEnd(range.endContainer, range.endOffset);
              position = preCaretRange.toString().length;
            }
          }
          return position;
        }
        const chars = getCaretIndex(codeDiv);

        // copy code from oryginal textarea to fake input
        codeDiv.innerText = codeTextarea.value;

        // highlight syntax
        w3CodeColor(codeDiv);

        // focus fake input
        codeDiv.focus();

        // set caret
        function createRange(node, chars, range) {
          range = document.createRange();

          range.selectNode(node);
          range.setStart(node, 0);

          if (chars.count === 0) {
            range.setEnd(node, chars.count);
          } else if (node && chars.count > 0) {
            if (node.nodeType === Node.TEXT_NODE) {
              if (node.textContent.length < chars.count) {
                chars.count -= node.textContent.length;
              } else {
                range.setEnd(node, chars.count);
                chars.count = 0;
              }
            } else {
              for (var lp = 0; lp < node.childNodes.length; lp++) {
                range = createRange(node.childNodes[lp], chars, range);

                if (chars.count === 0) {
                  break;
                }
              }
            }
          }

          return range;
        }

        function setCurrentCursorPosition(chars) {
          var selection = window.getSelection();

          var range = createRange(codeDiv, {
            count: chars,
          });

          range.collapse(false);
          selection.removeAllRanges();
          selection.addRange(range);
        }

        setCurrentCursorPosition(chars);
      } else if (
        e.code === "Enter" ||
        e.code === "NumpadEnter" ||
        e.key === "Backspace" ||
        e.key === "Delete"
      ) {
        codeTextarea.value = codeDiv.innerText;
      }
    };
    codeDiv.addEventListener("keyup", (e) => {
      hlt(e);
      keyIsDown = false;
    });
    // manage CTRL + Z
    codeDiv.addEventListener("keydown", (e) => {
      if (e.code === "KeyZ" && e.ctrlKey && !keyIsDown) {
        keyIsDown = true;
        codeDiv.innerText = oryginalCode;
        hlt(e);
      }
    });
    // manage paste event
    codeDiv.addEventListener("paste", (e) => {
      hlt(e);
    });

    w3CodeColor(codeDiv);
  });
};
export default syntaxHighlight;
