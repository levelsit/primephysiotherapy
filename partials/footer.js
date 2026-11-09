/* =========================================================
   SITE FOOTER — shared by every page. Edit this file once and the
   change appears on all pages.
   Pages in a sub-folder (like conditions/) load it with
   data-root="../" so the links still work.
========================================================= */
(function () {
  var script = document.currentScript;
  var root = script.getAttribute("data-root") || "";
  var html = `<footer class="prime-footer-compact">

    <div class="prime-footer-grid-compact">

      <div class="prime-footer-brand-compact">

        <div class="prime-footer-brand-row">
          <a href="index.html" class="prime-footer-logo-compact" aria-label="Prime Physiotherapy Home">
            <img src="prime-logo.png" alt="Prime Physiotherapy">
          </a>

          <div class="prime-footer-brand-copy">
            <p class="prime-footer-brand-title">
              Experienced physiotherapy care across South Western Sydney for more than 30 years.
            </p>
            <p class="prime-footer-brand-text">
              Personalised care from clinics in Green Valley, Liverpool and Moorebank.
            </p>
          </div>
        </div>

        <div class="prime-footer-newsletter-wrap">
          <span class="prime-footer-newsletter-label">Stay connected</span>

          <form class="prime-footer-newsletter" action="#" method="post">
            <div class="prime-footer-email-field">
              <span class="prime-footer-email-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                  <path d="m3 7 9 6 9-6"></path>
                </svg>
              </span>

              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                aria-label="Email address"
                required
              >

              <button type="submit" class="prime-footer-subscribe">
                Subscribe
              </button>
            </div>
          </form>

          <p class="prime-footer-privacy">
            By subscribing you agree to our
            <a href="#">Privacy Policy</a>
          </p>
        </div>

      </div>

      <div class="prime-footer-column-compact">
        <h3>Pages</h3>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="what-we-treat.html">What We Treat</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="our-team.html">Our Team</a></li>
          <li><a href="clinics-and-fees.html">Locations</a></li>
          <li><a href="careers.html">Careers</a></li>
          <li><a href="for-referrers.html">For Referrers</a></li>
          <li><a href="for-employers.html">For Employers</a></li>
          <li><a href="faqs.html">FAQs</a></li>
          <li><a href="index.html#gallery">Gallery</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>

      <div class="prime-footer-column-compact" id="locations">
        <h3>Locations</h3>

        <div class="prime-footer-location-compact">
          <a href="clinics-and-fees.html#green-valley" class="prime-footer-location-name">Green Valley</a>
          <p>198 Green Valley Road<br>Green Valley NSW 2168</p>
        </div>

        <div class="prime-footer-location-compact">
          <a href="clinics-and-fees.html#liverpool" class="prime-footer-location-name">Liverpool</a>
          <p>The Whitlam Centre<br>90a Memorial Ave<br>Liverpool NSW 2170</p>
        </div>

        <div class="prime-footer-location-compact">
          <a href="clinics-and-fees.html#moorebank" class="prime-footer-location-name">Moorebank</a>
          <p>39 Stockton Ave<br>Moorebank NSW 2170</p>
        </div>
      </div>

      <div class="prime-footer-column-compact">
        <h3>Services</h3>
        <ul>
          <li><a href="services.html">Manipulation</a></li>
          <li><a href="services.html">Work-Related</a></li>
          <li><a href="services.html">Gym Programs</a></li>
          <li><a href="services.html">Hydrotherapy</a></li>
          <li><a href="services.html">Dry Needling</a></li>
          <li><a href="services.html">Group Exercise</a></li>
          <li><a href="services.html">Post-Operative</a></li>
          <li><a href="conditions/womens-health.html">Women's Health</a></li>
        </ul>
      </div>

      <div class="prime-footer-column-compact prime-footer-contact-compact" id="contact">
        <h3>Get in touch</h3>

        <div class="prime-footer-contact-item">
          <span>Liverpool</span>
          <a href="tel:0296008755">02 9600 8755</a>
        </div>

        <div class="prime-footer-contact-item">
          <span>Moorebank</span>
          <a href="tel:0296022296">02 9602 2296</a>
        </div>

        <div class="prime-footer-contact-item">
          <span>Green Valley</span>
          <a href="tel:0298266855">02 9826 6855</a>
        </div>

        <div class="prime-footer-contact-item">
          <span>Email</span>
          <a href="mailto:info@primephysiotherapy.com.au" class="prime-footer-contact-email">
            info@primephysiotherapy.com.au
          </a>
        </div>

        <a href="https://primephysiotherapy.com.au/schedule-an-appointment/" class="prime-footer-appointment">
          Book an Appointment <span>→</span>
        </a>
      </div>

    </div>

    <div class="prime-footer-bottom-compact">
      <div class="prime-footer-bottom-inner-compact">

        <p class="prime-footer-copyright">
          © <span id="primeFooterYear"></span>
          Prime Physiotherapy. All rights reserved.
        </p>

        <div class="prime-footer-bottom-right-compact">

          <div class="prime-footer-legal-compact">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>

          <div class="prime-footer-socials-compact">

            <a href="https://www.facebook.com/prime.physio" class="prime-footer-social-compact prime-social-facebook" aria-label="Prime Physiotherapy on Facebook" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.5 8.5H17V5h-2.5C11.4 5 10 6.8 10 9.5V12H7v3.5h3V22h4v-6.5h2.7l.6-3.5H14V9.8c0-.9.3-1.3.5-1.3Z"></path>
              </svg>
            </a>

            <a href="https://www.youtube.com/user/PrimePhysiotherapy/feed" class="prime-footer-social-compact prime-social-youtube" aria-label="Prime Physiotherapy on YouTube" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z"></path>
              </svg>
            </a>

          </div>
        </div>

      </div>
    </div>

  </footer>`;
  if (root) {
    html = html.replace(/(href|src)="(?!https?:|#|tel:|mailto:|data:|\/)/g, "$1=\"" + root);
  }
  script.insertAdjacentHTML("beforebegin", html);

})();
