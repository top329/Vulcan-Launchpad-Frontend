/**
 * copy text to clipboard
 * @param text 
 */
export const copyToClipboard = async ( text: string ) => {
    // Navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        // message.info(`Copied ${text}`)
    } else {
      // Use the 'out of viewport hidden text area' trick
      const textArea = document.createElement("textarea");
      textArea.value = text;
          
      // Move textarea out of the viewport so it's not visible
      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";
          
      document.body.prepend(textArea);
      textArea.select();
  
      try {
          document.execCommand('copy');
          // message.info(`Copied ${text}`)
      } catch (error) {
          console.error(error);
      } finally {
          textArea.remove();
      }
    }
  }