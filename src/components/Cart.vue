<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { useCartStore } from '@/stores/cart.ts';
import { RouterLink } from 'vue-router';

export default {
    methods: {
        decrementQuantity(productId: number) {
            this.cartStore.decrement(productId)
        },
        incrementQuantity(productId: number) {
            this.cartStore.increment(productId)
        },
        deleteProduct(productId: number) {
            this.cartStore.deleteProduct(productId)
        }
    },
    computed: {
        cartStore() {
            return useCartStore();
        },
        details() {
            return this.cartStore.details;
        }
    }
}
</script>


<template>
    <v-card class="mt-4">
        <v-cart-title>
            Productos agregados al carrito
        </v-cart-title>
        <v-card-text>
            <v-list v-if="details.length > 0">
                <v-list-item v-for:="detail in details" :value="detail.productId">
                    <v-list-item-title>
                        Product {{ detail.productId }}
                        <v-btn class="ml-2" icon="mdi-minus" size="x-small"
                            @click="decrementQuantity(detail.productId)">
                        </v-btn>
                        Cantidad: {{ detail.quantity }}
                        <v-btn icon="mdi-plus" size="x-small" @click="incrementQuantity(detail.productId)">
                        </v-btn>
                        <v-btn class="ml-2" icon="mdi-delete" size="x-small" @click="deleteProduct(detail.productId)">
                        </v-btn>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            <p v-else>
                Aun no has agregado productos a tu carrito de compras.
                <br>
                Has <RouterLink to="/">click aqui </RouterLink> para ver los productos disponibles
            </p>
        </v-card-text>
    </v-card>
</template>
