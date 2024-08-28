<template>
  <div class="dropzone-container" @dragover="dragover" @dragleave="dragleave" @drop="drop">
    <input
        type="file"
        name="file[]"
        id="fileInput"
        class="hidden-input"
        @change="onChange"
        ref="refFiles"
        accept=".gif,.webp,.jpg,.jpeg,.png"
        multiple
    />

    <label for="fileInput" class="file-label text-center">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-image"
          viewBox="0 0 16 16"
      >
        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        <path
            d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"
        />
      </svg>
      <div v-if="isDragging">Release to drop files here.</div>
      <div v-else>Drop files here or <u>click here</u> to upload.</div>
    </label>

    <div class="preview-container mt-4" v-if="thumbnails.length > 0">
      <div v-for="(thumb, index) in thumbnails" :key="index" class="preview-card">
        <div>
          <img class="preview-img" :src="thumb.url" />
          <p :title="thumb.name">{{ makeName(thumb.name) }}</p>
        </div>
        <div>
          <a href="javascript:void(0)" class="ml-2" type="button" @click="remove(index)" title="Remove file">
            <b>&times;</b>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import axios from "axios";

const props = defineProps({
  modelValue: Array
});

const thumbnails = ref([]);
const isDragging = ref(false);
const refFiles = ref(null);

const emit = defineEmits(["update:modelValue"]);

const onChange = () => {
  if (refFiles.value) {
    const files = Array.from(refFiles.value.files);
    const newThumbnails = files.map(file => ({
      file,
      name: file.name,
      url: URL.createObjectURL(file)
    }));
    thumbnails.value.push(...newThumbnails);
    updateModelValue();
    uploadFiles(files);
  }
};

const updateModelValue = () => {
  const updatedValue = thumbnails.value.map(t => ({
    id: t.id || null,  // Handle case if `id` is not available
    url: t.url,
    name: t.name
  }));
  emit("update:modelValue", updatedValue);
};

const makeName = (name) => {
  return (
      name.split(".")[0].substring(0, 3) +
      "..." +
      name.split(".").pop()
  );
};

const remove = (index) => {
  thumbnails.value.splice(index, 1);
  updateModelValue();
};

const dragover = (e) => {
  e.preventDefault();
  isDragging.value = true;
};

const dragleave = () => {
  isDragging.value = false;
};

const drop = (e) => {
  e.preventDefault();
  if (refFiles.value) {
    const files = Array.from(e.dataTransfer.files);
    const newThumbnails = files.map(file => ({
      file,
      name: file.name,
      url: URL.createObjectURL(file)
    }));
    thumbnails.value.push(...newThumbnails);
    updateModelValue();
    uploadFiles(files);
    isDragging.value = false;
  }
};

// Upload files to the backend
const uploadFiles = async (files) => {
  const formData = new FormData();
  files.forEach(file => formData.append('files[]', file));

  try {
    const response = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('Upload successful', response.data);
  } catch (error) {
    console.error('Error uploading files:', error);
  }
};

// Initialize thumbnails with existing modelValue
watch(
    () => props.modelValue,
    (newValue) => {
      if (newValue && newValue.length > 0) {
        thumbnails.value = newValue.map(item => ({
          id: item.id,
          url: item.url,
          name: item.name
        }));
      }
    },
    { immediate: true }
);
</script>

<style scoped>
.dropzone-container {
  padding: 4rem 2rem;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
}

.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

.file-label {
  font-size: 20px;
  display: block;
  cursor: pointer;
}

.preview-container {
  display: flex;
  margin-top: 2rem;
  position: relative;
  flex-wrap: wrap;
}

.preview-card {
  display: flex;
  padding: 5px;
  margin-left: 5px;
}

.preview-img {
  width: 50px;
  height: auto;
  border-radius: 5px;
  border: 1px solid #a2a2a2;
  background-color: #a2a2a2;
}
</style>
