jQuery(document).ready(function() {
    jQuery('#main-wrapper, #sidebar-wrapper').theiaStickySidebar({
      // Settings
      additionalMarginTop: 30
    });
  });
// Show and Hide Comments
function showComm(e){document.getElementById(e)&&("none"!=document.getElementById(e+"-show").style.display?(document.getElementById(e+"-show").style.display="none",document.getElementById(e).style.display="block"):(document.getElementById(e+"-show").style.display="block",document.getElementById(e).style.display="none"))};
