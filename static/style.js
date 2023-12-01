document.addEventListener("DOMContentLoaded", function() {
    const noPospay = document.getElementById("no_pospay");
    noPospay.addEventListener("input", function() {
      const sanitizedInput = noPospay.value.replace(/[^0-9]/g, '');
      if (sanitizedInput.length > 13) {
        noPospay.value = sanitizedInput.slice(0, 13);
      } else {
        noPospay.value = sanitizedInput;
      }
    });
  });