import { LitElement, html } from "https://cdn.skypack.dev/lit-element";
import { create, cssomSheet } from 'https://cdn.skypack.dev/twind';

// This creates a twind "sheet" which is a wrapper
// around a CSS stylesheet
const sheet = cssomSheet({ target: new CSSStyleSheet() });

// This gets an instance of the tw helper for our
// stylesheet above. Meaning any time we use `tw`, it will
// append the right CSS to our custom stylesheet.
const { tw } = create({ sheet });

function teamMemberTemplate(name, title, description) {
    return html`
    <div class="${tw`p-4 lg:w-1/2`}">
        <div class="${tw`h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left`}">
        <img alt="team" class="${tw`flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4`}" src="https://placeimg.com/640/480/any">
        <div class="${tw`flex-grow sm:pl-8`}">
            <h2 class="${tw`title-font font-medium text-lg text-gray-900`}">${name}</h2>
            <h3 class="${tw`text-gray-500 mb-3`}">${title}</h3>
            <p class="${tw`mb-4`}">${description}</p>
            <span class="${tw`inline-flex`}">
            <a class="${tw`text-gray-500`}">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="${tw`w-5 h-5`}" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
            </a>
            <a class="${tw`ml-2 text-gray-500`}">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="${tw`w-5 h-5`}" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
            </a>
            <a class="${tw`ml-2 text-gray-500`}">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="${tw`w-5 h-5`}" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
            </a>
            </span>
        </div>
        </div>
    </div>
    `;
  }

class TeamSection extends LitElement {
  // We tell lit that we have already made a CSS
  // stylesheet and to use that directly.
  // At this point, it will be an empty sheet, but will
  // be updated after our first render by `tw`
  static styles = [sheet.target];

  render() {
    return html`
    <section class="${tw`text-gray-600 body-font`}">
    <div class="${tw`container px-5 py-24 mx-auto`}">
      <div class="${tw`flex flex-col text-center w-full mb-20`}">
        <h1 class="${tw`text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest`}">OUR TEAM</h1>
        <p class="${tw`lg:w-2/3 mx-auto leading-relaxed text-base`}">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
      </div>
      <div class="${tw`flex flex-wrap -m-4`}">
        ${teamMemberTemplate('Brian Perry', 'Front End Architect', 'Architecting so many front ends')}
        ${teamMemberTemplate('Brian Perry', 'Front End Developer', 'Developing so many front ends')}
        ${teamMemberTemplate('Brian Perry', 'Open Source Contributor', 'So much Drupal')}
        ${teamMemberTemplate('Brian Perry', 'Speaker', 'Always talking at you')}
      </div>
    </div>
  </section>
    `;
  }
}

customElements.define("team-section", TeamSection);