let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Ambil data dari Local Storage atau array kosong jika tidak ada

// Fungsi untuk menyimpan tasks ke Local Storage
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Simpan array tasks dalam bentuk JSON
}

// Fungsi untuk menambahkan task baru
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Tambahkan task baru ke dalam array
    tasks.push(taskText);

    // Simpan tasks ke Local Storage setelah menambah task baru
    saveTasksToLocalStorage();

    // Render ulang task list
    renderTasks();

    // Kosongkan input setelah menambah tugas
    taskInput.value = "";
}

// Fungsi untuk mengedit task
function editTask(index) {
    const newTaskText = prompt("Edit your task:", tasks[index]);

    if (newTaskText !== null && newTaskText.trim() !== "") {
        // Update task di array
        tasks[index] = newTaskText;

        // Simpan tasks ke Local Storage setelah mengedit task
        saveTasksToLocalStorage();

        renderTasks(); // Render ulang task list
    }
}

// Fungsi untuk menghapus task dengan konfirmasi
function deleteTask(index) {
    const confirmation = confirm("Are you sure you want to delete this task?");
    if (confirmation) {
        // Hapus task dari array
        tasks.splice(index, 1);

        // Simpan tasks ke Local Storage setelah menghapus task
        saveTasksToLocalStorage();

        renderTasks(); // Render ulang task list
    }
}

// Fungsi untuk merender task list ke dalam HTML
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ""; // Kosongkan daftar task sebelum dirender ulang

    // Loop melalui array tasks dan buat elemen li untuk setiap task
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        // Buat tombol edit dan delete
        const buttonContainer = document.createElement('div');

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.onclick = function () {
            editTask(index);
        };

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.onclick = function () {
            deleteTask(index);
        };

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);
        li.appendChild(buttonContainer);

        // Tambahkan li ke ul
        taskList.appendChild(li);
    });
}

// Render task list saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', renderTasks);
