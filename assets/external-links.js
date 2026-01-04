document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a');
  const currentDomain = window.location.hostname;
  
  links.forEach(function(link) {
    const linkDomain = link.hostname;
    
    if (linkDomain && linkDomain !== currentDomain) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
