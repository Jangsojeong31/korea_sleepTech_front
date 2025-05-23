{
    // ! 2) Task 저장소의 구조 - 클래스
    var TaskLogger_1 = /** @class */ (function () {
        function TaskLogger() {
            this.tasks = [];
            this.taskIdCounter = 0; // 할 일의 ID를 생성하기 위한 카운터
        }
        // 메서드 - function 키워드 x
        TaskLogger.prototype.addTask = function (description) {
            var newTask = {
                id: this.taskIdCounter++,
                description: description,
                timestamp: new Date(),
            };
            this.tasks.push(newTask);
            this.renderTask(); // 할 일 목록을 화면에 다시 재랜더링
            return newTask;
        };
        TaskLogger.prototype.deleteTask = function (taskId) {
            this.tasks = this.tasks.filter(function (task) { return task.id !== taskId; });
            this.renderTask();
        };
        TaskLogger.prototype.creatTaskElement = function (task) {
            var taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = "\n      <span>".concat(task.description, " - ").concat(task.timestamp.toLocaleDateString(), "</span>\n      <button data-task-id=").concat(task.id, ">Delete</button>\n      ");
            return taskItem;
        };
        TaskLogger.prototype.renderTask = function () {
            var _this = this;
            var taskList = document.getElementById('task-list');
            if (taskList) {
                taskList.innerHTML = '';
                this.tasks.forEach(function (task) {
                    var taskItem = _this.creatTaskElement(task);
                    taskList.appendChild(taskItem);
                });
                this.addDeleteEventListeners();
            }
        };
        TaskLogger.prototype.addDeleteEventListeners = function () {
            var _this = this;
            // 모든 삭제 버튼 선택
            var deleteButtons = document.querySelectorAll('.task-item button');
            deleteButtons.forEach(function (button) {
                button.addEventListener('click', function (e) {
                    var taskId = parseInt(e.target.dataset.taskId || '0', 10);
                    _this.deleteTask(taskId);
                });
            });
        };
        return TaskLogger;
    }());
    // ! 3) 프로젝트 실행의 진입점
    var init = function () {
        // TaskManager 인스턴스 생성
        var taskLogger = new TaskLogger_1();
        var logTaskButton = document.getElementById('log-task-button');
        var taskModal = document.getElementById('task-modal');
        var closeModalButton = document.querySelector('.close');
        var addTaskButton = document.getElementById('add-task-button');
        var taskInput = document.getElementById('task-input');
        if (logTaskButton) {
            logTaskButton.addEventListener('click', function () {
                if (taskModal) {
                    taskModal.style.display = 'block';
                    taskInput.focus();
                }
            });
        }
        if (closeModalButton) {
            closeModalButton.addEventListener('click', function () {
                if (taskModal) {
                    taskModal.style.display = 'none';
                }
            });
        }
        window.addEventListener('click', function (e) {
            if (e.target === taskModal) { // 이벤트가 발생된 요소 범위가 modal 내부(modal-content)가 아니라 실질적인 task Modal인 경우
                if (taskModal) { // 모달 창 바깥 영역 클릭 시 모달 창 숨김
                    taskModal.style.display = 'none';
                }
            }
        });
        if (addTaskButton) {
            addTaskButton.addEventListener('click', function () {
                var description = taskInput.value;
                if (description && description.trim() !== '') {
                    taskLogger.addTask(description.trim());
                    taskInput.value = '';
                    if (taskModal) {
                        taskModal.style.display = 'none';
                    }
                }
                else {
                    alert('Task 설명은 비워질 수 없습니다. 내용을 입력해주세요');
                }
            });
        }
    };
    document.addEventListener('DOMContentLoaded', init);
}
