import "./syntaxHighlight.scss";
import { w3CodeColor } from "./variables";

const syntaxHighlight = () => {
  let syntaxMode = JSON.parse(localStorage.getItem("magentoChill_syntaxMode"));
  if (!syntaxMode) {
    syntaxMode = 0;
    localStorage.setItem("magentoChill_syntaxMode", syntaxMode);
  }

  const inputMaxLength = 20000;
  const codeTextareas = document.querySelectorAll(
    `textarea[id^=html_content_]:not(.oryginal-code-input),
    [id^=html_product_block_]:not(.oryginal-code-input),
    [id^=terms_and_condition_content_]:not(.oryginal-code-input),
    [id^=terms_and_condition_extended_terms_content_]:not(.oryginal-code-input)`
  );

  if (codeTextareas.length) {
    document.body.classList.add(`chill-syntax-highlight-${syntaxMode}`);
  }

  function replaceNbsps(str) {
    var re = new RegExp(String.fromCharCode(160), "g");
    return str.replaceAll(re, " ");
  }

  codeTextareas.forEach((codeTextarea) => {
    // mark oryginal inputs
    codeTextarea.classList.add("oryginal-code-input");

    // create fake input
    const codeDiv = document.createElement("div");
    codeDiv.setAttribute("contenteditable", "true");
    codeDiv.classList.add("chill-syntax-hl-container");
    codeTextarea.parentElement.appendChild(codeDiv);
    codeDiv.innerText = codeTextarea.value;

    // highlight function
    const hlt = (e) => {
      if (
        !(e.code === "KeyZ" && e.ctrlKey) &&
        !e.shiftKey &&
        (!e.ctrlKey ||
          (e.code === "KeyZ" && e.ctrlKey) ||
          (e.code === "KeyV" && e.ctrlKey)) &&
        !e.altKey &&
        e.key !== "Control" &&
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
        console.log("hls");
        // manage paste event
        if (e.type === "paste") {
          const selection = window.getSelection();
          selection.deleteFromDocument();
        }
        // copy code from fake input to oryginal textarea
        codeTextarea.value = replaceNbsps(codeDiv.innerText);
        if (codeDiv.innerText.length < inputMaxLength) {
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
        }
      } else if (
        e.code === "Enter" ||
        e.code === "NumpadEnter" ||
        e.key === "Backspace" ||
        e.key === "Delete"
      ) {
        console.log("hls 2");
        codeTextarea.value = replaceNbsps(codeDiv.innerText);
      }
    };

    codeDiv.addEventListener("keyup", hlt);

    // manage paste event
    codeDiv.addEventListener("paste", (e) => {
      codeTextarea.value = replaceNbsps(codeDiv.innerText);
    });
    if (codeDiv.innerText.length < inputMaxLength) {
      w3CodeColor(codeDiv);
    }
  });
};
export default syntaxHighlight;
