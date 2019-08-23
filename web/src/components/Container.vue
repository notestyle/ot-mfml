<template>
    <div class="container-scroller">
        <Loader />
        <Header/>
        <div class="container-fluid page-body-wrapper">
            <div class="main-panel">
                <router-view></router-view>
            </div>     
        </div>  
    </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Loader from "@/components/Loader.vue";
export default {
  name: 'Container', 
  components: {Header, Loader},
}
</script>