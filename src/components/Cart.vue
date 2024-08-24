<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { PropType } from 'vue';
import type { CartDetail } from '@/model/types';

export default {
    props: {
        details: {
            type: Object as PropType<Array<CartDetail>>,
            required: true
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
            <v-list>
                <v-list-item v-for:="detail in details" :value="detail.productId">
                    <v-list-item-title>
                        Product {{ detail.productId }} (Qty: {{ detail.quantity }})
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>
