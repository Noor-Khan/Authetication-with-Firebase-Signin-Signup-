<template>
    <div>
        <button @click="$emit('logout')" class="btn btn-info">Logout</button>
        <h2> Dashboard </h2>
        <Sidebar />

    </div>
</template>
<script>
import Sidebar from '../components/Sidebar'
export default {
    props: ['isLogin'],
    components: {
        Sidebar
    }
}
</script>
