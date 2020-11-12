Vue.component('product', {
    props: {
        instock: {
            type: Boolean,
            required: true
        }
    },
    template: `
            <div class="product">
                <h1>{{product}}</h1>
                <div>
                <p><a :href=url>The Artist</a></p>
                <p>Item is available: {{ instock }}
                </div>
            </div>`,
    data() {
        return {
            product: 'APryakhin',
            image: './images/ironHeartAPryakhin.jpg',
            url: 'https://www.puttyandpaint.com/Seemann'
        }
    }
})

Vue.component('product-details', {
    props: {
        details: {
            type: String,
            required: false
        }
    },
    template: `
        <div class="product-details">
            <p>This is a component</p>
            <p>{{ details }}</p>
            <div class="color-box" :style="{ backgroundColor: green }"
                <button v-on:click="addToCart">Add to Cart</button>
            </div>
        </div>
    `,
    data() {
        return {
            details: 'acrylics'
    }
},
methods: {
    addToCart() {
        this.cart += 1
    }
}
})

var app = new Vue({
    el: '#app',
    data: {
        instock: true,
        cart: 0
    }
})