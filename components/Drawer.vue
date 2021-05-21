<template>
    <v-navigation-drawer :value="value" @input="$emit('input', $event)" fixed color="accent">
        <v-list>
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="title">
                    Application
                </v-list-item-title>
                <v-list-item-subtitle>
                    subtext
                </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider />

            <v-list-item
            v-for="drawerItem in drawerItems"
            :key="drawerItem.id"
            >
                <v-list-item-title>
                    {{ drawerItem.title }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>


<script>
export default {
    data() {
        return {
            drawerItems: [
                {title: "New post" ,id: 1},
                {title: "Articles" ,id: 2},
                {title: "Review" ,id: 3},
                ]
        }
    },
    props: {
        value: {
            type: Boolean,
            default: null,
        }
    }
}
</script>