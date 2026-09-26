/* ===== Responsive Navbar with Scroll Spy ===== */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!navbar) return;

    const allNavItems = navLinks ? Array.from(navLinks.querySelectorAll('.nav-link')) : [];
    const mobileNavItems = mobileMenu ? Array.from(mobileMenu.querySelectorAll('.nav-link')) : [];

    /* ---- Mobile hamburger ---- */
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-open');
            document.body.style.overflow = mobileMenu.classList.contains('is-open') ? 'hidden' : '';
        });

        mobileNavItems.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('is-active');
                mobileMenu.classList.remove('is-open');
                document.body.style.overflow = '';
            });
        });
    }

    /* ---- Scroll shadow ---- */
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 10);
        }
    });

    /* ---- Scroll Spy ---- */
    const sections = document.querySelectorAll('section[id]');
    const allNavLinksForSpy = [...allNavItems, ...mobileNavItems];

    if (sections.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    allNavLinksForSpy.forEach(link => {
                        const href = link.getAttribute('href');
                        link.classList.toggle('active', href === '#' + id);
                    });
                }
            });
        }, { rootMargin: '-30% 0px -70% 0px' });

        sections.forEach(s => observer.observe(s));
    }
}
