<template>
    <div>
        <h2> Dashboard </h2>
        <Sidebar />

    </div>
</template>
<script>
import Sidebar from '../components/Sidebar'
export default {
    props: ['userData'],
    components: {
        Sidebar
    }
}
</script>
