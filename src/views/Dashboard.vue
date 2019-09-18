<template>
    <div>

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
