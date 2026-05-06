/* ===== Responsive Navbar with "More" Dropdown + Scroll Spy ===== */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const navMore = document.querySelector('.nav-more');
    const navMoreToggle = document.querySelector('.nav-more-toggle');
    const navMoreDropdown = document.querySelector('.nav-more-dropdown');
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!navbar) return;

    const allNavItems = navLinks ? Array.from(navLinks.querySelectorAll('.nav-link')) : [];
    const moreItems = navMoreDropdown ? Array.from(navMoreDropdown.querySelectorAll('.nav-link')) : [];
    const mobileNavItems = mobileMenu ? Array.from(mobileMenu.querySelectorAll('.nav-link')) : [];

    /* ---- Desktop: measure and collapse items into More ---- */
    function measureAndCollapse() {
        if (!navLinks || !navMore || !navMoreDropdown) return;
        if (window.innerWidth < 769) return; // hamburger mode

        /* Restore all items */
        moreItems.forEach(item => navLinks.appendChild(item));
        if (navMore) navMore.classList.remove('visible');
        navMoreDropdown.classList.remove('is-open');

        /* Wait for layout, then measure */
        requestAnimationFrame(() => {
            const navInner = document.querySelector('.nav-inner');
            if (!navInner) return;
            const available = navInner.clientWidth - (navMoreToggle ? navMoreToggle.offsetWidth + 40 : 40);

            let used = 0;
            const currentItems = Array.from(navLinks.querySelectorAll('.nav-link'));
            const overflow = [];

            /* Brand width + actions width estimate */
            const brand = document.querySelector('.nav-brand');
            const actions = document.querySelector('.nav-actions');
            const fixedWidth = (brand ? brand.offsetWidth : 0) + (actions ? actions.offsetWidth : 0) + 60;

            currentItems.forEach((item, i) => {
                used += item.offsetWidth + 4; // 4px for gap
                if (used > available - fixedWidth && i > 0) {
                    overflow.push(item);
                }
            });

            if (overflow.length > 0) {
                overflow.forEach(item => navMoreDropdown.appendChild(item));
                navMore.classList.add('visible');
            }
        });
    }

    /* ---- More dropdown toggle ---- */
    if (navMoreToggle && navMoreDropdown) {
        navMoreToggle.addEventListener('click', e => {
            e.stopPropagation();
            navMoreDropdown.classList.toggle('is-open');
        });
        document.addEventListener('click', () => {
            navMoreDropdown.classList.remove('is-open');
        });
    }

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
    const allNavLinksForSpy = [...allNavItems, ...moreItems, ...mobileNavItems];

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

    /* ---- Resize listener ---- */
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(measureAndCollapse, 150);
    });

    /* Initial measure */
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(measureAndCollapse);
    } else {
        setTimeout(measureAndCollapse, 200);
    }
}
