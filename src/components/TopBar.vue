<script lang="ts">
import { useCartStore } from '../stores/cart.ts';
import { RouterLink } from 'vue-router';

export default {
    computed: {
        itemsCount() {
            const cartStore = useCartStore();
            return cartStore.cartItemsCount;
        }
    }
}

</script>

<template>
    <v-app-bar flat>
        <v-container class="mx-auto d-flex align-center justify-center">
            <v-avatar class="me-4 " color="grey-darken-1" size="32"></v-avatar>

            <RouterLink to="/" custom v-slot="{ navigate }">
                <v-btn prepend-icon="mdi-home-variant" :active="$route.name === 'home'" variant="text"
                    @click="navigate">
                    Home
                </v-btn>
            </RouterLink>
            <RouterLink to="/cart" custom v-slot="{ navigate }">
                <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="success">
                    <v-btn prepend-icon="mdi-cart" :active="$route.name === 'cart'" variant="text" @click="navigate">
                        Cart
                    </v-btn>
                </v-badge>
            </RouterLink>
            <RouterLink to="/about" custom v-slot="{ navigate }">
                <v-btn prepend-icon="mdi-information" :active="$route.name === 'about'" variant="text"
                    @click="navigate">
                    About
                </v-btn>
            </RouterLink>
            <v-spacer></v-spacer>
        </v-container>
    </v-app-bar>
</template>