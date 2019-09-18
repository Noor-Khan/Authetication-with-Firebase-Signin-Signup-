<template>
    <div>
        <el-button type="primary" @click="$emit('logout')">Logout</el-button>
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
