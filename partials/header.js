/* =========================================================
   SITE HEADER — shared by every page. Edit this file once and the
   change appears on all pages.
   Pages in a sub-folder (like conditions/) load it with
   data-root="../" so the links still work.
========================================================= */
(function () {
  var script = document.currentScript;
  var root = script.getAttribute("data-root") || "";
  var html = `<a class="skip-link" href="#main">Skip to content</a>
<header
    class="site-header"
    id="siteHeader"
  >


    <div class="topbar">

      <div class="topbar-inner">


        <div class="topbar-left">

          <span>
            Green Valley
          </span>

          <span>
            Liverpool
          </span>

          <span>
            Moorebank
          </span>

        </div>


        <div class="topbar-right">

          <a href="#locations">
            Our Locations
          </a>

          <a href="contact.html">
            Contact Us
          </a>

        </div>


      </div>

    </div>



    <div class="navbar-wrap">

      <nav
        class="navbar"
        aria-label="Main navigation"
      >


        <a
          href="index.html"
          class="logo"
          aria-label="Prime Physiotherapy Home"
        >

          <img
            src="prime-logo.png"
            alt="Prime Physiotherapy"
          >

        </a>



        <ul
          class="nav-menu"
          id="navMenu"
        >

          <li>
            <a href="about.html">
              About
            </a>
          </li>

          <li class="prime-has-mega">
            <a href="what-we-treat.html">
              What We Treat <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="prime-mega">
              <div class="prime-mega-inner">
                <div class="prime-mega-cols">
              <div>
                <p class="prime-mega-title">Neck and head</p>
                <ul><li><a href="conditions/cervical-spine.html">Neck pain</a></li><li><a href="conditions/cervicogenic-headaches.html">Headaches from the neck</a></li><li><a href="conditions/vestibular-rehabilitation.html">Dizziness and vertigo</a></li></ul>
              </div>
              <div>
                <p class="prime-mega-title">Back and trunk</p>
                <ul><li><a href="conditions/thoracic-spine.html">Upper back and ribs</a></li><li><a href="conditions/lumbar-spine.html">Lower back pain</a></li><li><a href="conditions/pelvis.html">Pelvis and sacroiliac joint</a></li><li><a href="conditions/posture.html">Posture</a></li></ul>
              </div>
              <div>
                <p class="prime-mega-title">Upper limb</p>
                <ul><li><a href="conditions/shoulder.html">Shoulder</a></li><li><a href="conditions/elbow.html">Elbow</a></li><li><a href="conditions/wrist-and-hand.html">Wrist and hand</a></li></ul>
              </div>
              <div>
                <p class="prime-mega-title">Lower limb</p>
                <ul><li><a href="conditions/hip.html">Hip</a></li><li><a href="conditions/thigh.html">Thigh and groin</a></li><li><a href="conditions/knee.html">Knee</a></li><li><a href="conditions/shin.html">Shin</a></li><li><a href="conditions/ankle-and-foot.html">Ankle and foot</a></li></ul>
              </div>
              <div>
                <p class="prime-mega-title">Groups and general</p>
                <ul><li><a href="conditions/arthritis.html">Arthritis</a></li><li><a href="conditions/sports-injuries.html">Sports injuries</a></li><li><a href="conditions/child-and-adolescent.html">Children and teens</a></li><li><a href="conditions/womens-health.html">Women's health and pelvic floor</a></li></ul>
              </div>
                </div>
                <aside class="prime-mega-feature">
                  <strong>Not sure what's causing your pain?</strong>
                  <p>We'll assess you, explain what's going on and plan treatment with you. No referral needed.</p>
                  <a href="what-we-treat.html" class="prime-mega-all">View all conditions →</a>
                </aside>
              </div>
            </div>

          </li>

          <li class="prime-has-mega">
            <a href="services.html">
              Services <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="prime-mega prime-mega-services">
              <div class="prime-mega-inner">
                <div class="prime-mega-cols"><a href="services.html#hydrotherapy">Hydrotherapy<span>Heated-pool rehab at the Whitlam Centre</span></a><a href="services.html#post-op-physiotherapy">Post-operative care<span>From day surgery to full recovery</span></a><a href="services.html#manipulation">Manipulation<span>Spinal and joint manipulation</span></a><a href="services.html#dry-needling">Dry needling<span>Needling for muscle trigger points</span></a><a href="services.html#group-exercise">Group exercise<span>Clinical Pilates with reformers</span></a><a href="services.html#gym-programs">Gym programs<span>Supervised end-stage rehab</span></a><a href="services.html#casting-splinting">Casting and splinting<span>Waterproof casts and custom splints</span></a><a href="services.html#work-related">Work-related<span>Screening, PEFA and functional capacity</span></a><a href="conditions/womens-health.html">Women's health<span>Pelvic floor and bladder control</span></a>
                </div>
                <aside class="prime-mega-feature">
                  <strong>Hydrotherapy at the Whitlam Centre</strong>
                  <p>Exercise in the heated indoor pool with your physiotherapist beside you in the water.</p>
                  <a href="services.html" class="prime-mega-all">View all services →</a>
                </aside>
              </div>
            </div>
          </li>

          <li>
            <a href="our-team.html">
              Our Team
            </a>
          </li>

          <li>
            <a href="clinics-and-fees.html">
              Fees
            </a>
          </li>

          <li>
            <a href="careers.html">
              Careers
            </a>
          </li>

        </ul>



        <div class="nav-right">

          <a
            href="https://primephysiotherapy.com.au/schedule-an-appointment/"
            class="book-button"
          >
            Book an Appointment
          </a>


          <button
            type="button"
            class="mobile-toggle"
            id="mobileToggle"
            aria-label="Open navigation"
          >
            <span></span>
          </button>

        </div>


      </nav>

    </div>


  </header>`;
  if (root) {
    html = html.replace(/(href|src)="(?!https?:|#|tel:|mailto:|data:|\/)/g, "$1=\"" + root);
  }
  script.insertAdjacentHTML("beforebegin", html);

  /* =======================================================
     SMOOTH PAGE ANIMATIONS
     The page fades in on load, and sections and cards rise
     gently into view as you scroll. Turned off for visitors
     who ask their device to reduce motion.
  ======================================================= */
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    document.head.insertAdjacentHTML("beforeend",
      "<style>" +
      "main{animation:pa-page .6s ease both}" +
      "@keyframes pa-page{from{opacity:0}to{opacity:1}}" +
      ".pa{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1)!important}" +
      ".pa.pa-in{opacity:1;transform:none}" +
      "</style>");
    var SEL = [
      ".prime-page-hero-inner", ".px-head", ".prime-section-header", ".prime-services-header",
      ".prime-gallery-header", ".prime-about-main", ".prime-about-photo", ".prime-about-point",
      ".au-copy", ".au-photo", ".au-marquee", ".pc-card", ".px-card", ".px-panel", ".px-note",
      ".px-figure", ".px-copy", ".px-video-frame", ".tm-row", ".kp-card", ".kp-row", ".kp-faq",
      ".hf-intro", ".hf-faq", ".rv-head", ".rv-card", ".ct-card", ".ct-strip", ".prime-services-carousel", ".prime-gallery-item",
      ".prime-clinic", ".cf-card", ".cf-fees", ".prime-fees-table-wrap", ".prime-payment", ".px-cta-inner",
      ".px-beliefs-list li", ".st-reception li", ".prime-careers-grid > *", ".prime-group-head"
    ].join(",");
    document.addEventListener("DOMContentLoaded", function () {
      var els = document.querySelectorAll("main " + SEL.split(",").join(", main "));
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var el = e.target;
          el.classList.add("pa-in");
          io.unobserve(el);
          /* hand the element back to its own hover effects afterwards */
          setTimeout(function () {
            el.classList.remove("pa", "pa-in");
            el.style.transitionDelay = "";
          }, 1100);
        });
      }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
      els.forEach(function (el) {
        var sibs = Array.prototype.filter.call(el.parentElement.children, function (c) { return c.matches(SEL); });
        var i = sibs.indexOf(el);
        el.style.transitionDelay = Math.min(i, 4) * 80 + "ms";
        el.classList.add("pa");
        io.observe(el);
      });
    });
  }

  /* Highlight the current page in the menu */
  var path = location.pathname;
  var page = path.split("/").pop() || "index.html";
  if (path.indexOf("/conditions/") !== -1) page = "what-we-treat.html";
  document.querySelectorAll("#navMenu > li > a").forEach(function (link) {
    if (link.getAttribute("href").split("/").pop() === page) {
      link.setAttribute("aria-current", "page");
    }
  });
})();
