<template>
  <div class="container">
  <div class="filter-section">
    <input class="inpSearch" placeholder="Nhập từ khóa tìm kiếm" />
    <select class="selec">
      <option for="">Lọc bài viết</option>
      <option value=""></option>
    </select>
    <button class="add-btn">Thêm mới bài viết</button>
  </div>

  <div class="table-container">
    <table class="article-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tiêu đề</th>
          <th>Hình ảnh</th>
          <th>Ngày viết</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        
        <tr v-if="loading">
          <td colspan="6" class="loading-row">
            <div class="spinner"></div>
            Đang tải dữ liệu...
          </td>
        </tr>

      
        <tr v-for="(post, index) in posts" :key="post.id" v-else>
          <td>{{ index + 1 }}</td>
          <td>{{ post.title }}</td>
          <td><img :src="post.image" alt="article image" class="article-image" /></td>
          <td>{{ post.create_at }}</td>
          <td>
            <span class="status" :class="{'published': post.status === true}">
              {{ post.status === true ? "Đã xuất bản" : "Chưa xuất bản" }}
            </span>
          </td>
          <td>
            <button class="block-btn" @click="handelisShow(post.id)">{{ post.status? "Chặn":"Bỏ chặn" }}</button>
            <button class="edit-btn">Sửa</button>
            <button class="delete-btn">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <ModalComfrim v-if="isShow" @closeFrom="handelisNTShow" @confrimFrom="changeStatus"/>
</div>

</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import ModalComfrim from './ModalComfrim.vue';
const posts = ref([]);
const loading = ref(true); 
const findPost = ref()
const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/posts");
    posts.value = response.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false; 
  }
};

onMounted(() => {
  fetchData();
});
const isShow = ref(false)
const handelisShow=(id)=>{
  isShow.value = true
  findPost.value = id
}
const handelisNTShow=()=>{
  isShow.value = false
}

const changeStatus = async () => {
  try {
   const response =  await axios.get(`http://localhost:8080/posts/${findPost.value}`);
   await axios.patch(`http://localhost:8080/posts/${findPost.value}`,{
    status: !response.data.status
   });
    isShow.value = false
    fetchData();
  } catch (error) {
    console.log('Lỗi khi thay đổi trạng thái:', error);
  }
};

</script>

<style scoped>
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #007bff;
  animation: spin 1s ease infinite;
  margin: auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-row {
  text-align: center;
  font-weight: bold;
  color: #007bff;
  height: 100px;
}

.container {
  padding: 20px;
}
.inpSearch {
  padding: 5px;
}
.selec {
  width: 100px;
  padding: 5px;
}
.filter-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.add-btn {
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

.table-container {
  max-height: 300px; 
  overflow-y: auto;  
}

.article-table {
  width: 100%;
  border-collapse: collapse;
}

.article-table th,
.article-table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.article-image {
  width: 50px;
  height: 50px;
}

.status {
  background-color: #f0a5a5;
  color: #d03c2b;
  padding: 5px;
  border-radius: 5px;
}

.status.published {
  background-color: #d4edda;
  color: #155724;
  padding: 5px;
  border-radius: 5px;
}

.block-btn {
  background-color: #ffc107;
  color: white;
  padding: 5px;
  margin-right: 5px;
  border: none;
  border-radius: 5px;
}

.edit-btn {
  background-color: #17a2b8;
  color: white;
  padding: 5px;
  margin-right: 5px;
  border: none;
  border-radius: 5px;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
}
</style>
