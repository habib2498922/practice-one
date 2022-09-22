import './bootstrap';

import { createApp } from "vue"
import ProductGrid from "./componenets/ProductGrid";
const app = createApp({})
app.component('product-grid', ProductGrid);
app.mount("#app")
