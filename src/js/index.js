document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('[js-header]');
  const stickerCrookeds = document.querySelectorAll('[js-sticky__crooked]');
  const stickers = document.querySelectorAll('[js-sticky]');
  const stickerStraightBig = document.querySelector('[js-sticky__straight-big]');
  const stickerStraightSmall = document.querySelector('[js-sticky__straight-small]');
  const uP720 = window.matchMedia('(min-width: 720px)');
  let isCollapsed = false;
  let menuIsOpened;

  /**
   * Attaches a click event to all <code> elements to enable copying their content to the clipboard.
   * Displays a temporary tooltip with feedback after copying.
   */
  const attachCodeCopyListeners = () => {
    document.querySelectorAll('pre').forEach((element) => {
      element.addEventListener('click', async () => {
        document.body.focus();

        try {
          await navigator.clipboard.writeText(element.innerText);
          element.setAttribute('data-tooltip', 'Copied!');
          setTimeout(() => element.removeAttribute('data-tooltip'), 1000);
        } catch (err) {
          console.error('Failed to copy text:', err);
        }
      });
    });
  };

  /**
   * Collapses the menu by adding necessary classes and styles.
   */
  const menuCollap = () => {
    stickers.forEach((sticky) => sticky.classList.add('has-sticker'));
    stickerCrookeds.forEach((crooked) => {
      crooked.style.transition = 'none';
      crooked.classList.add('has-sticker');
    });
    stickerStraightBig.style.transition = 'none';
    stickerStraightSmall.style.transition = 'none';
    stickerStraightBig.classList.add('has-sticker');
    stickerStraightSmall.classList.add('has-sticker');
  };

  /**
   * Expands the menu by removing necessary classes and styles.
   */
  const menuExpand = () => {
    stickers.forEach((sticky) => sticky.classList.remove('has-sticker'));

    stickerStraightBig.style.transition = 'ease-in 950ms';
    stickerStraightBig.classList.remove('has-sticker');
    stickerStraightBig.addEventListener('transitionend', () => {
      if (!isCollapsed) {
        stickerStraightSmall.style.transition = 'ease-in 450ms';
        stickerStraightSmall.classList.remove('has-sticker');
        stickerCrookeds.forEach((crooked) => {
          crooked.style.transition = 'ease-in 450ms';
          crooked.classList.remove('has-sticker');
        });
      }
    });
  };

  /**
   * Handles the scroll event to collapse or expand the menu based on scroll position.
   */
  const handleScroll = () => {
    if (window.scrollY > header.offsetTop && !isCollapsed) {
      menuCollap();
      isCollapsed = true;
    } else if (window.scrollY <= header.offsetTop && isCollapsed && !menuIsOpened) {
      menuExpand();
      isCollapsed = false;
    }
  };

  // Initialize the code copy feature
  attachCodeCopyListeners();

  // Attach scroll event listener
  window.onscroll = handleScroll;
});
