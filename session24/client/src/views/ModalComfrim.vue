<template>
    <div class="container">
      <div class="modal-overlay" >
        <div class="modal-content" >
          <div class="modal-header">
            <h3>Xác nhận</h3>
            <button class="close-btn" @click="handleClose">✕</button>
          </div>
          <div class="modal-body">
            <p>
              <span class="warning-icon">⚠️</span> Bạn có chắc chắn muốn thay đổi trạng thái bài viết?
            </p>
          </div>
          <div class="modal-footer">
            <button class="cancel-btn" @click="handleClose">Hủy</button>
            <button class="confirm-btn" @click="handleConfrim">Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
    const emit = defineEmits(["closeFrom","confrimFrom"])
    const handleClose=()=>{
        emit("closeFrom")
    }
    const handleConfrim=()=>{
        emit("confrimFrom")
    }
</script>

  <style scoped>
  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 480px;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-body {
  margin-top: 20px;
  font-size: 16px;
}

.warning-icon {
  color: #f39c12;
  font-size: 24px;
  margin-right: 8px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.cancel-btn,
.confirm-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-btn {
  background-color: #ccc;
  margin-right: 10px;
}

.confirm-btn {
  background-color: #007bff;
  color: white;
}

</style>