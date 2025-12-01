// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="welcome.html">Welcome</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="life.html">Life</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="life/too-public.html">Too Public?</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="life/my-beliefs.html">My Beliefs</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="life/my-beliefs/multiple-universes.html">Multiple Universes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="life/my-beliefs/soy.html">Soy</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running.html">Running</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="resources.html">Resources</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="resources/books.html">Books</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="resources/music.html">Music</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/other_gpx_files.html">GPX Files</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/other_gpx_files/foothills_50k.html">Foothills 50k</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/other_gpx_files/wmfa_50k.html">White Mesa Fat Ass 50k</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/direct.html">As Race Director</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/direct/foothills-fat-ass.html">Foothills Fat Ass</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/direct/chimney_melon_50k.html">Chimney Melon 50k</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/direct/baldy_50k.html">Baldy 50k</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/direct/baldy_50k/results.html">Results</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/direct/white_mesa_50k.html">White Mesa 50k</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past.html">As Entrant</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/dnfs.html">DNFs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2015.html">2015</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2015/wser.html">Western States</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2021.html">2021</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2021/hardrock.html">Hardrock</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022.html">2022</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/cedro.html">Cedro Peak 50k</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/cocodona-250.html">Cocodona 250</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/big_cottonwood_marathon.html">Big Cottonwood Marathon</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/aa_50k.html">AA 50k</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/torgbc.html">Tour of the Rio Grande</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/mt_taylor_50k.html">Mt. Taylor 50k</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/feral_hog_50k_rucksack.html">Feral Hog 50k Rucksack</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/tortugas_mountain.html">Tortugas Mountain 24 Hour Challenge</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/duke_city_marathon.html">Duke City Marathon</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/tatonka_5k.html">Tatonka 5k</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/forever_young_six_miler.html">Forever Young 6 miler</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/jj100.html">Javelina Jundred</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/dptr_106m.html">Deadman Peaks 106 miler</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/wmfa50k.html">White Mesa Fat Ass 50k</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/ed_t.html">Ed Thanksgiving&#39;s Group Run</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/black_friday.html">Black Friday Turkey Trots</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/bbf50k.html">Bosque Bigfoot 50k</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/tucson_marathon.html">Tucson Marathon</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2022/grinch_lunch.html">The Grinch Lunch</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023.html">2023</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/foothills_fat_ass.html">Foothills Fat Ass</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/sandia-snowshoe-race.html">Sandia Snowshoe Race</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/resolutions-stink.html">Resolutions Stink!</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/the-quad.html">Mt. Taylor Winter Quadrathlon</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/v-day.html">V Day</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/king-of-the-hill.html">King of the Hill</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/shenanigains.html">Shenanigains</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/bmdm.html">Bataan Memorial Death March</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/bmdm/my-race.html">My Race</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/academy-of-pain.html">Academy of Pain</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/brew-crowning.html">Burque Brew Tour Crowning</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/berta.html">Berta Fun Run</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/cocodona-250.html">Cocodona 250</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/cocodona-250/creepy-crawly.html">Creepy Crawly Winner</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/wser.html">Western States</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/barge-fun-run.html">BARGE Fun Run</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/tatonka_5k.html">Tatonka 5k</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/duke_city_marathon.html">Duke City Marathon</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/jj100.html">Javelina Jundred</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/dptr_53m.html">Deadman Peaks 53 Miler</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/wmfa50k.html">White Mesa Fat Ass 50k</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/souls-of-sorrow.html">Socorro Souls of Sorrow</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/ed_t.html">Ed Thanksgiving&#39;s Group Run</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/black_friday.html">Black Friday Turkey Trots</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/past/2023/bbf50k.html">Bosque Bigfoot 50k</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="unicycling.html">Unicycling</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/my-beliefs.html">My Beliefs</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/my-beliefs/knees.html">Knees</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="running/my-beliefs/rest-days.html">Rest Days</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="programming.html">Programming</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="programming/pdp8.html">PDP-8</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="programming/pdp8/first-hack.html">My First Hack</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="programming/pdp11.html">PDP-11</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="programming/pdp11/not-worthy.html">I am Not Worthy</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="programming/ancient-peripherals.html">Ancient Peripherals</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="programming/ancient-peripherals/punch-cards.html">Punch Cards</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="programming/blown.html">Blown Opportunities</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="programming/blown/steve-jobs.html">Steve Jobs</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="programming/rust.html">Rust</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="poker.html">Poker</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="poker/wsop-chip-bet.html">WSOP Chip Bet</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bataan.html">Bataan</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bataan/death-march.html">Death March</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bataan/memorial-death-march.html">Memorial Death March</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="thanks.html">Thanks</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="thanks/agdg.html">AGDG</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="thanks/agdg/agdgat.html">AGDGAT</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="thanks/barge.html">BARGE</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="thanks/team_rwb.html">Team RWB</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="thanks/george.html">GEORGE</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        const sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

