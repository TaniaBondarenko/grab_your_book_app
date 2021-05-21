import getValues from '../data/booksData';

export default function CategorySelection() {
  return `<li style="width:100%"  >
           <label for="categories">Choose a category:</label>
            <select name="categories" id="categories" class="categories" onchange="(doFilter(this.value));" >
              <option value='' >Category </option>
              ${getValues('categories')}
              </select>
          </li>`;
}
