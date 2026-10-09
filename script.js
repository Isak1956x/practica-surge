document.addEventListener('DOMContentLoaded', () => {
  const surgeDomain = 'isak-practica-surge.surge.sh';
  const copyBtn = document.getElementById('btnCopyDomain');
  const copyText = document.getElementById('copyText');
  const footerTime = document.getElementById('footerTime');

  // Copy domain button
  if (copyBtn && copyText) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(`https://${surgeDomain}`);
        const originalText = copyText.textContent;
        copyText.textContent = '¡Copiado al portapapeles!';
        copyBtn.style.borderColor = 'var(--accent-emerald)';
        
        setTimeout(() => {
          copyText.textContent = originalText;
          copyBtn.style.borderColor = '';
        }, 2200);
      } catch (err) {
        // Fallback
        const input = document.createElement('input');
        input.value = `https://${surgeDomain}`;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        copyText.textContent = '¡Copiado!';
        setTimeout(() => {
          copyText.textContent = 'Copiar Dominio Surge';
        }, 2000);
      }
    });
  }

  // Live time indicator in footer
  if (footerTime) {
    const updateTime = () => {
      const now = new Date();
      footerTime.textContent = `Sync: ${now.toLocaleTimeString()} • ${surgeDomain}`;
    };
    updateTime();
    setInterval(updateTime, 10000);
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
