import { mount} from "@vue/test-utils";
import TodoApp from "@/components/TodoApp";

describe("TodoApp.vue", () => {
    let wrapper;

    //Takes a call back and then runs that call back before each test
    beforeEach(() => {
        wrapper = mount(TodoApp);
    })

    it('should render todo text', () => {
        const todo = wrapper.get('[data-test="todo"]')

        expect(todo.text()).toBe("Learn Vue Testing")
    });

    it('should add new todo', async function () {
        //Make sure that there is at least one to do
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(4);

        await wrapper.get('[data-test="new-todo"').setValue('New Todo');
        await wrapper.get('[data-test="form"]').trigger('submit');

        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(5);
    });

    it('should complete a todo', async function () {
        await wrapper.get('[data-test="todo-checkbox"').setValue('true');

        expect(wrapper.get('[data-test="todo-label"]').classes()).toContain('completed');
    });
})