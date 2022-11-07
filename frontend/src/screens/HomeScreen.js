import { getProducts } from '../api';
import { parseRequestUrl } from '../utils';

const HomeScreen = {
    render: async () => {
        const { value } = parseRequestUrl();
    const products = await getProducts({ searchKeyword: value });
    if (products.error) {
      return `<div class="error">${products.error}</div>`;
    }

       return `
        <ul class="products">
         ${products.map((product) => `
         <li>
            <div class="product">
                <a href="/#/product/${product._id}">
                    <img src="${product.image}" alt="${product.name}" />
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
                        ${product.name}
                    </a>
                </div>
            </div>
         </li>
         `).join('\n')}
        `;
    },
};
export default HomeScreen;
