<template>
    <div id="app">
        <layout></layout>
    </div>
</template>
<script>
import Layout from './components/Layout';

export default {
    name: 'app',
    components: {
        Layout,
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>
<style>
html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
}

a {
    font-size: 16px;
    color: #c0ccda;
    text-decoration: none;
}

a:link {
    color: #20a0ff;
}

a:active: {
    color: #20a0ff;
}

a:hover {
    text-decoration: none;
    color: #20a0ff;
}

#app {
    font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
}

.fillpanel {
    width: 100%;
    height: 100%;
}
</style>
