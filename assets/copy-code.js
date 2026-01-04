document.addEventListener('DOMContentLoaded', function() {
  // Handle both Jekyll highlight blocks and markdown code blocks
  const codeBlocks = document.querySelectorAll('figure.highlight, div.highlighter-rouge');
  
  codeBlocks.forEach(function(codeBlock) {
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.textContent = 'Copy';
    
    button.addEventListener('click', function() {
      const pre = codeBlock.querySelector('pre');
      const code = pre.textContent;
      navigator.clipboard.writeText(code).then(function() {
        button.textContent = 'Copied!';
        setTimeout(function() {
          button.textContent = 'Copy';
        }, 2000);
      });
    });
    
    codeBlock.appendChild(button);
  });
});
