import getValues from '../data/booksData';

export default function LanguageSelection() {
  return `<li>
           <label for="language">Select language:</label>
            <select name="language" id="language" class="language" onchange="ShowBooks(doFilter(this.value));">
              <option value="" selected disabled hidden>Language</option>
              ${getValues('language')}
              </select>
          </li>`;
}
