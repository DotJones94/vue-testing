import { mount} from "@vue/test-utils";
import { shallowMount} from "@vue/test-utils";
import ParentTest from "@/components/ParentTest.vue";
describe('ParentTest.vue', function () {
    it("render", () =>{
        //Will mount and any children components
        const wrapper = mount(ParentTest);
        expect(wrapper.text()).toContain("Child")

        //If you want to just get the parent
        const wrapperShallow = shallowMount(ParentTest);
        expect(wrapperShallow.text()).toContain("Parent")
    })
});