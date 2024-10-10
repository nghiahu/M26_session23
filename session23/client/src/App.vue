<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import ListStudent from './components/ListStudent.vue';
  //Bài 2
  const fetchData = async () => {
    try {
      const repones = await axios.get("http://localhost:8080/students")
      console.log("Student",repones.data);
    } catch (error) {
      console.log("error",error);
    }
  }
  onMounted(()=>{
    fetchData()
    infoStudent()
  })
  // Bài 3
  const infoStudent = async () => {
    try {
      const repones = await axios.get("http://localhost:8080/students/4")
      console.log("Tìm sinh viên theo Id",repones.data);
    } catch (error) {
      console.log("Không tìm thấy bản ghi",error);
    }
  }
</script>

<template>
  <div>
    <!-- Bài 4 -->
    <ListStudent/>
  </div>
</template>

<style scoped>

</style>
