<script lang="ts">
import ProductCard from '../components/ProductCard.vue'
import Cart from './Cart.vue'
import type { CartDetail, Product } from '@/model/types';

export default {
    components: {
        ProductCard,
        Cart
    },
    props: ['details'],
    data() {
        return {
            products: <Array<Product>>
                [
                    { name: 'monitor', price: 456, id: 5 },
                    { name: 'microfono', price: 120, id: 8 },
                    { name: 'silla', price: 56, id: 15 },
                    { name: 'escritorio', price: 405, id: 10 },
                    { name: 'mouse', price: 12, id: 80 },
                    { name: 'bicicleta', price: 689, id: 35 }
                ],
            // details: <Array<CartDetail>>[]
        }
    },
    methods: {
        onProductAdded(productId: number) {
            const detailFound = this.details.find(d => d.productId === productId);
            if (detailFound) {
                detailFound.quantity += 1;
            } else {
                this.details.push({
                    productId,
                    quantity: 1
                })
            }
        }
    }
};   
</script>

<template>
    <v-row>
        <v-col v-for:="p in products" cols="4">
            <ProductCard :product="p" @addProduct="onProductAdded(p.id)" />
        </v-col>
    </v-row>

</template>