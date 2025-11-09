class UserManager {
    constructor() {
        this.users = [];
        this.filteredUsers = [];
        this.init();
    }

    async init() {
        await this.loadData();
        this.setupEventListeners();
        this.renderUsers();
        this.updateStats();
    }

    async loadData() {
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            this.users = data.users;
            this.filteredUsers = [...this.users];
            this.renderUsers();
            this.updateStats();
            console.log('Данные успешно загружены:', this.users);
        } catch (error) {
            console.error('Ошибка загрузки данных:', error);
        }
    }

    setupEventListeners() {
        // Поиск
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.filterUsers(e.target.value, document.getElementById('statusFilter').value);
        });

        // Фильтр по статусу
        document.getElementById('statusFilter').addEventListener('change', (e) => {
            this.filterUsers(document.getElementById('searchInput').value, e.target.value);
        });

        // Добавление пользователя
        document.getElementById('addUserForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addUser();
        });
    }

    filterUsers(searchTerm, statusFilter) {
        this.filteredUsers = this.users.filter(user => {
            const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                user.email.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'all' || 
                                (statusFilter === 'active' && user.isActive) ||
                                (statusFilter === 'inactive' && !user.isActive);
            return matchesSearch && matchesStatus;
        });
        this.renderUsers();
        this.updateStats();
    }

    renderUsers() {
        const container = document.getElementById('usersContainer');
        
        if (this.filteredUsers.length === 0) {
            container.innerHTML = `
                <div class="col-12">
                    <div class="alert alert-warning text-center">
                        Пользователи не найдены
                    </div>
                </div>
            `;
            return;
        }

        container.innerHTML = this.filteredUsers.map(user => `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card user-card h-100 ${user.isActive ? 'border-success' : 'border-warning'}">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title">${user.name}</h5>
                            <span class="badge ${user.isActive ? 'bg-success' : 'bg-warning'}">
                                ${user.isActive ? 'Активен' : 'Неактивен'}
                            </span>
                        </div>
                        <p class="card-text">
                            <strong>📧 Email:</strong> ${user.email}<br>
                            <strong>🎂 Возраст:</strong> ${user.age} лет<br>
                            <strong>💰 Баланс:</strong> $${user.balance}<br>
                            <strong>📅 Регистрация:</strong> ${user.registered}
                        </p>
                    </div>
                    <div class="card-footer bg-transparent">
                        <small class="text-muted">ID: ${user.id}</small>
                        <button class="btn btn-sm btn-outline-danger float-end" onclick="userManager.deleteUser(${user.id})">
                            🗑️ Удалить
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    updateStats() {
        const totalUsers = this.filteredUsers.length;
        const activeUsers = this.filteredUsers.filter(user => user.isActive).length;
        const averageAge = this.filteredUsers.length > 0 ? 
            Math.round(this.filteredUsers.reduce((sum, user) => sum + user.age, 0) / this.filteredUsers.length) : 0;
        const totalBalance = this.filteredUsers.reduce((sum, user) => sum + user.balance, 0);

        document.getElementById('totalUsers').textContent = totalUsers;
        document.getElementById('activeUsers').textContent = activeUsers;
        document.getElementById('averageAge').textContent = averageAge;
        document.getElementById('totalBalance').textContent = `$${totalBalance}`;
    }

    addUser() {
        const form = document.getElementById('addUserForm');
        const newUser = {
            id: Math.max(...this.users.map(u => u.id)) + 1,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            age: parseInt(document.getElementById('age').value),
            balance: parseInt(document.getElementById('balance').value),
            isActive: document.getElementById('isActive').value === 'true',
            registered: new Date().toISOString().split('T')[0]
        };

        this.users.push(newUser);
        this.filteredUsers = [...this.users];
        this.renderUsers();
        this.updateStats();
        
        form.reset();
        
        // Показать уведомление
        this.showNotification('Пользователь успешно добавлен!', 'success');
    }

    deleteUser(userId) {
        if (confirm('Вы уверены, что хотите удалить этого пользователя?')) {
            this.users = this.users.filter(user => user.id !== userId);
            this.filteredUsers = this.filteredUsers.filter(user => user.id !== userId);
            this.renderUsers();
            this.updateStats();
            this.showNotification('Пользователь удален!', 'warning');
        }
    }

    showNotification(message, type = 'info') {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        alert.style.cssText = 'top: 20px; right: 20px; z-index: 1050; min-width: 300px;';
        alert.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        document.body.appendChild(alert);
        
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}

// Инициализация приложения
const userManager = new UserManager();

// Глобальная функция для обновления данных
function loadData() {
    userManager.loadData();
    userManager.showNotification('Данные обновлены!', 'info');
}