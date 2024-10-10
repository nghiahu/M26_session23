<template>
    <div>
  <button @click="createStudent">Thêm Sinh viên</button>
  <button @click="updateStudentById">Cập nhật Sinh viên</button>
</div>
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

const removeById = async () => {
    try {
      const repones = await axios.delete("  http://localhost:8080/students/5")
      console.log("Sinh viên đã xóa");
    } catch (error) {
      console.log("Không tìm thấy");
    }
  } 


const createStudent = async () => {
    try {
      const repones = await axios.post("  http://localhost:8080/students",{
        student_name: "Lê Thị Táo",
        email: "taog55555@gmail.com",
        address: "Hải Dương",
        phone: "0911223344",
        status: false,
        create_at: "10/10/2024"
      })
      console.log("Đã thêm sinh viên");
    } catch (error) {
      console.log("error",error);
    }
  } 
  onMounted(()=>{
    // removeById()
  })
  const updateStudentById = async () => {
    try {
      const repones = await axios.put("http://localhost:8080/students/2",{
        student_name: "Lê Thị Táo Mèo",
        email: "taog55555@gmail.com",
        address: "Hải Dương",
        phone: "0911223344",
        status: false,
        create_at: "10/10/2024"
      })
      console.log("Đã sửa thành công");
      console.log(repones.data);
    } catch (error) {
      console.log("error",error);
    }
  } 
</script>

<style>

</style>